import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

const ReviewCard = ({ rating, reviewsCount }) => {
  const stars = Math.round(rating); // Round rating to nearest integer

  return (
    <div className="bg-purple-50 rounded-xl p-6 text-center shadow-md w-64">
      <div className="text-4xl font-bold">{rating}</div>
      <div className="flex justify-center my-2">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-6 h-6 ${
              index < stars ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="text-gray-500">{reviewsCount} Reviews</div>
    </div>
  );
};

export default ReviewCard;
