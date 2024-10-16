import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // For rendering dynamic forms
import Navbar from "../components/Navbar";
import LineImage from "../assets/LineImage.svg"; // Import the image
import AuthLogo from "../assets/audLearnAuth-logo.svg";

const AuthLayout = () => {
  const location = useLocation();

  const isLoginOrSignupPage =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");
  const isInstructorRoute = location.pathname.startsWith("/instructor");

  return (
    <div>
      <Navbar />
      <div
        className="flex h-auto mx-0 my-[50px]  md:mx-[100px] shadow-lg "
        style={{ boxShadow: "0px 4px 4px 2px rgba(99, 62, 163, 0.2)" }}
      >
        {/* Left side - Purple Section */}
        {isLoginOrSignupPage &&
          !isInstructorRoute && ( // Only render for login/signup if NOT the instructor route
            <div className="relative hidden lg:flex lg:w-1/3 bg-[#633EA3] text-white justify-center items-center p-10">
              <div className="mt-[-120px]">
                {/* <h1 className="text-5xl font-bold">AudLearn</h1>
                <p className="mt-6 text-lg">Learning Without Boundaries</p> */}
                <img src={AuthLogo} alt="logo" />
              </div>

              {/* Image positioned at the bottom left */}
              <img
                src={LineImage}
                alt="Lines"
                className="absolute bottom-0 left-0 w-full object-cover"
              />
            </div>
          )}

        {/* Right side - Dynamic content rendering */}
        <div className="flex-1 bg-white flex items-center justify-center p-6">
          {/* This will render the form based on route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
