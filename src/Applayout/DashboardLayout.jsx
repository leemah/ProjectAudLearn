import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  // Control sidebar visibility on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="instructor-layout flex flex-col min-h-screen">
      {/* Navbar always at the top */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-grow relative">
        {/* Sidebar for navigation */}

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="flex-grow px-5 py-[50px] md:px-[100px] transition-all duration-300 ease-in-out">
          <Outlet /> {/* Render the specific page content here */}
        </div>

        {/* Overlay for when the sidebar is open on mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
