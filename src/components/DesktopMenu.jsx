import React from "react";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <Link to="/" className="text-white">
        Categories
      </Link>
      {/* <Link to="/" className="text-white w-full">
        Find a Career
      </Link> */}
      <Link to="/instructor" className="text-white w-full">
        Teach on AudLearn
      </Link>
    </div>
  );
};

export default DesktopMenu;
