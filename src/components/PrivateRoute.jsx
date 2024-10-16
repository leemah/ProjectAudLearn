// src/components/PrivateRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, roleRequired }) => {
  const { user, role } = useSelector((state) => state.auth);
  const location = useLocation(); // To capture the current URL location

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (role !== roleRequired) {
    // Role-based redirection
    if (role === "instructor") {
      return <Navigate to="/instructordashboard" replace />;
    } else if (role === "student") {
      return <Navigate to="/dashboard" replace />;
    } else {
      // In case of an unauthorized role
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // If user has the required role, render the children component
  return children;
};

export default PrivateRoute;
