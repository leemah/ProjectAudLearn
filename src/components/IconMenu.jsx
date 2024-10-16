// Import React and React Icons
import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";

const IconMenu = () => {
  const iconStyle = "text-orange-500 text-2xl"; // Tailwind classes for icon color and size
  const containerStyle = "bg-white rounded-full p-2"; // Tailwind classes for the circle background

  return (
    <div className="flex justify-center items-center space-x-8 p-4">
      {/* Notification Icon */}
      <div className={containerStyle}>
        <FaBell className={iconStyle} />
      </div>

      {/* Settings Icon */}
      <div className={containerStyle}>
        <FaCog className={iconStyle} />
      </div>

      {/* User Icon */}
      <div className={containerStyle}>
        <FaUser className={iconStyle} />
      </div>
    </div>
  );
};

export default IconMenu;
