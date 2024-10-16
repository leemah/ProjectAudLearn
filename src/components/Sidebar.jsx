import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChartLine,
  FaBookOpen,
  FaComments,
  FaUserCircle,
  FaInbox,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profile1 from "../../public/assets/profile1.jpg";

// MenuItem component for displaying each item
const MenuItem = ({ icon, label, isSidebarOpen, path }) => (
  <Link to={path}>
    <div className="flex items-center justify-start py-3 px-4 hover:bg-[#633EA3] rounded-lg cursor-pointer">
      {icon}
      {isSidebarOpen && <span className="ml-3 text-lg">{label}</span>}
    </div>
  </Link>
);

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Set sidebar closed by default on mobile screens
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-auto flex relative">
      {/* Sidebar */}
      <div
        className={`bg-[#633EA3] text-white flex flex-col justify-between transition-all duration-300 ${
          isSidebarOpen ? "w-64 p-6" : "w-20 p-2"
        } h-full`}
      >
        {/* Profile Section */}
        <div>
          <button onClick={toggleSidebar} className="p-2">
            {isSidebarOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-xl md:text-2xl" />
            )}
          </button>

          {/* Profile */}
          <div className="flex flex-col justify-center items-center mb-10">
            <img
              src={profile1}
              alt="Profile"
              className={`${
                isSidebarOpen
                  ? "w-12 h-12 md:w-20 md:h-20" // Normal size when sidebar is open
                  : "w-8 h-8 md:w-12 md:h-12"
              } rounded-full mb-3 transition-all duration-300 mt-5`}
            />
            {isSidebarOpen && (
              <div className="text-center">
                <h2 className="font-bold text-xl">Sam Smith</h2>
                <p className="text-sm text-white">View Profile</p>
                <p className="text-sm">ID: 118918429</p>
              </div>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col space-y-4">
            <MenuItem
              icon={<FaChartLine className="text-xl" />}
              label="Dashboard"
              isSidebarOpen={isSidebarOpen}
              path="/dashboard"
            />
            <MenuItem
              icon={<FaBookOpen className="text-xl" />}
              label="Courses"
              isSidebarOpen={isSidebarOpen}
              path="/dashboard/courses"
            />
            <MenuItem
              icon={<FaComments className="text-xl" />}
              label="Forum"
              isSidebarOpen={isSidebarOpen}
              path="/dashboard/forum"
            />
            <MenuItem
              icon={<FaUserCircle className="text-xl" />}
              label="Account"
              isSidebarOpen={isSidebarOpen}
              path="/dashboard/account"
            />
            <MenuItem
              icon={<FaInbox className="text-xl" />}
              label="Messages"
              isSidebarOpen={isSidebarOpen}
              path="/dashboard/messages"
            />
            <MenuItem
              icon={<FaSignOutAlt className="text-xl" />}
              label="Logout"
              isSidebarOpen={isSidebarOpen}
              path="/logout"
            />
          </nav>
        </div>

        {/* Settings */}
        <div className="text-sm">
          <MenuItem
            icon={<FaCog className="text-xl" />}
            label="Settings"
            isSidebarOpen={isSidebarOpen}
            path="/dashboard/settings"
          />
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {/* {isSidebarOpen && window.innerWidth < 768 && (
        <div
          className="absolute z-40 inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )} */}
    </div>
  );
};

export default Sidebar;
