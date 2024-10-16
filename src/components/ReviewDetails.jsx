import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewDetails = ({ name, date, rating, reviewText, userImage }) => {
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="border-b border-gray-300 pb-4 mb-4">
      <div className="flex items-center mb-2">
        <img
          src={userImage}
          alt={`${name}'s profile`}
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
      <div className="flex mb-2">{renderStars(rating)}</div>
      <p className="text-gray-600">{reviewText}</p>
    </div>
  );
};

export default ReviewDetails;
