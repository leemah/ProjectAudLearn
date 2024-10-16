import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaVideo,
  FaClipboardList,
  FaFileAlt,
  FaTags,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";
import Button from "../ui/Button";
const InstructorSidebar = () => {
  return (
    <div className="w-80 bg-[#F2EDFB] h-auto">
      {/* Sidebar Header */}
      <div className="mt-[50px]">
        <div className="bg-[#ffffff] w-full flex justify-center">
          <h2 className="text-lg font-bold text-purple-700">Course Plan</h2>
        </div>

        {/* Sidebar Links */}
        <div className="p-4 space-y-4">
          {/* Course Plan Section */}
          <NavLink
            to="/instructordashboard/intended-learners"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 px-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaGraduationCap className="mr-2" />{" "}
            {/* Icon for Intended Learners */}
            Intended Learners
          </NavLink>

          <NavLink
            to="/instructordashboard/course-structure"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaFileAlt className="mr-2" /> Course Structure
          </NavLink>
        </div>
      </div>

      {/* Create Content Section */}
      <div className="mt-[50px]">
        <div className="bg-[#ffffff] w-full flex justify-center">
          <h2 className="text-lg font-bold text-purple-700">Create Content</h2>
        </div>
        <div className="p-4 space-y-4">
          <NavLink
            to="/instructordashboard/film-edit"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaVideo className="mx-2" /> Film and Edit
          </NavLink>

          <NavLink
            to="/instructordashboard/set-curriculum"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaClipboardList className="mx-2" /> Set Curriculum
          </NavLink>
        </div>
      </div>

      {/* Publish Your Course Section */}
      <div className="mt-[50px]">
        <div className="bg-[#ffffff] w-full flex justify-center">
          <h2 className="text-lg font-bold text-purple-700">
            Publish Your Course
          </h2>
        </div>

        <div className="p-4 space-y-4">
          <NavLink
            to="/instructordashboard/pricing"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaTags className="mx-2" /> Pricing
          </NavLink>

          <NavLink
            to="/instructordashboard/course-comments"
            className={({ isActive }) =>
              `flex items-center justify-center py-2 bg-[#ffffff] text-purple-700 border border-[#633EA3] rounded-lg ${
                isActive ? "bg-purple-100 font-semibold" : "hover:bg-purple-50"
              }`
            }
          >
            <FaComments className="mr-2" />
            Course Comments
          </NavLink>
        </div>
      </div>

      <div className="mt-[50px]">
        <Button
          customStyles="text-[#f9f9f9] w-full mb-[50px] justify-center"
          label="Submit for Review"
        />
      </div>
    </div>
  );
};

export default InstructorSidebar;
