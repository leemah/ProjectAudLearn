import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import InstructorSidebar from "../components/InstructorSidebar";
import Footer from "../components/Footer";

const InstructorDashboard = () => {
  return (
    <div className="student-layout">
      <Navbar />
      <div className="flex">
        <InstructorSidebar /> {/* Sidebar for navigation */}
        <main className="flex-grow p-6 w-full">
          <Outlet /> {/* Render the specific page content here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
