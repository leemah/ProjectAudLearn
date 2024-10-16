import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardComponent = ({
  id,
  profileImage,
  courseImage,
  courseTitle,
  userName,
  level,
  rating,
  price,
}) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto border relative flex flex-col justify-between h-full"
      whileHover={{ scale: 1.05 }} // Zoom effect on hover
      initial={{ opacity: 0, y: 50 }} // Start with the card invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Animate to full visibility and normal position
      transition={{ duration: 0.5 }} // Smooth transition
    >
      {/* Course Image with Heart Icon */}
      <div className="relative">
        <img
          src={courseImage}
          alt={courseTitle}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-[#1B1B1C] opacity-30"></div>
        <div className="absolute top-3 right-3 bg-[#FFC107] rounded-full p-2 z-10">
          <AiOutlineHeart size={24} style={{ color: "white" }} />
        </div>
      </div>

      {/* Profile Section */}
      <div className="absolute top-[80px] left-3 flex items-center px-2 py-1">
        <img
          src={profileImage}
          alt={userName}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <p className="font-semibold text-[#f9f9f9]">{userName}</p>
      </div>

      {/* Course Information */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Course Title */}
        <h3 className="text-[18px] font-semibold mb-2 flex-shrink-0">
          {courseTitle}
        </h3>

        {/* Course Level, Students, Rating */}
        <div className="flex items-center text-gray-600 text-sm mb-4 flex-shrink-0">
          <div className="flex items-center mr-4">
            <input type="radio" className="mr-1" disabled checked={level} />
            <span>{level}</span>
          </div>
          <div className="flex items-center mr-4">
            <FaUsers className="mr-1" />
            <span>14</span>
          </div>
          <div className="flex items-center">
            <AiFillStar className="text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <p className="text-lg font-bold text-gray-700">${price}</p>
          <button
            className=" font-semibold"
            style={{
              color: "var(--secondary-color)",
            }}
          >
            Add to cart
          </button>
        </div>

        {/* Spacer to push the button down */}
        <div className="flex-grow"></div>

        {/* Get Course Button */}
        <div>
          <Link to={`/course-overview/${id}`}>
            <motion.button
              className="w-full text-white py-2 rounded-md hover:bg-orange-600"
              style={{
                backgroundColor: "var(--primary-color)",
              }}
              whileHover={{ scale: 1.02 }} // Slight zoom effect on button hover
              whileTap={{ scale: 0.98 }} // Slight shrink effect on click
            >
              Get Course
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
