import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";

const UserActions = ({ handleLogout }) => {
  return (
    <>
      <button className="text-white">
        <FaBell />
      </button>
      <button className="text-white">
        <FaCog />
      </button>
      <button className="text-white">
        <FaUser />
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </>
  );
};

export default UserActions;
