import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/audLearn_logo.svg";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import IconMenu from "./IconMenu"; // Import IconMenu component
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, role } = useSelector((state) => state.auth);

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

  const handleLogoClick = () => {
    navigate("/"); // This will navigate to the landing page
  };

  return (
    <nav
      className=" p-3 overflow-hidden"
      style={{
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={Logo}
          alt="AudLearn Logo"
          className="w-24 md:w-32 cursor-pointer"
          onClick={handleLogoClick}
        />

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <GiHamburgerMenu className="text-xl md:text-2xl justify-right" />
        </button>

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* SearchBar (hidden on mobile) */}
        <div className="hidden md:block">
          <SearchBar className="mr-5" />
        </div>

        {/* User Actions */}
        {/* <IconMenu handleLogout={handleLogout} /> */}
        <div className="hidden md:flex gap-8 items-center">
          {user !== null && user !== undefined ? (
            // Render IconMenu when the user is logged in

            <IconMenu />
          ) : (
            // Show Login and Signup buttons if the user is not logged in
            <>
              <button
                onClick={() => handleNavigation("/login")}
                className="px-10 py-2 w-full rounded border text-[18px] whitespace-nowrap min-w-[150px] md:text-[20px] md:px-12"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--white-color)",
                  borderColor: "var(--primary-color)",
                }}
              >
                Log In
              </button>
              <button
                onClick={() => handleNavigation("/signup")}
                className="bg-orange-500 text-white text-[18px] px-10 py-2 rounded w-full whitespace-nowrap min-w-[150px] md:text-[20px] md:px-12"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          // user={user}
          // handleLogout={handleLogout}
          handleNavigation={handleNavigation}
        />
      )}
    </nav>
  );
};

export default Navbar;
