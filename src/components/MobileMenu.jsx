import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import Button from "../ui/Button";

const MobileMenu = ({ user, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route is related to the instructor
  const isInstructorRoute = location.pathname.startsWith("/instructor");
  // Navigation handler for login/signup
  const handleNavigation = (path) => {
    if (isInstructorRoute) {
      if (path === "/login") {
        navigate("/instructor/login");
      } else if (path === "/signup") {
        navigate("/instructor/signup");
      }
    } else {
      navigate(path);
    }
  };
  return (
    <div className="md:hidden bg-[#633EA3] text-white fixed z-10 w-full  max-w-full overflow-hidden">
      <a href="/" className="block py-2 px-4">
        Categories
      </a>
      <a href="/" className="block py-2 px-4">
        Find a Career
      </a>
      <a href="/instructor" className="block py-2 px-4">
        Teach on AudLearn
      </a>

      <div className="space-y-2 px-4 py-2">
        {user ? (
          <>
            <button className="w-full text-left">
              <FaBell /> Notifications
            </button>
            <button className="w-full text-left">
              <FaCog /> Settings
            </button>
            <button className="w-full text-left">
              <FaUser /> Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-md text-left"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Button
              onClick={() => handleNavigation("/login")}
              customStyles="w-[50%] bg-transparent text-[#F76103] border border-[#F76103] px-4 py-2 text-left"
              label="Login"
            />
            <Button
              onClick={() => handleNavigation("/signup")}
              customStyles="w-[70%] bg-[#F76103] text-white px-4 py-2 text-left"
              label="Sign Up Now"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
