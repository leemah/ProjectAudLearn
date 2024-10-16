import React from "react";

const ReviewPercentageCard = ({ ratings }) => {
  return (
    <div className="bg-purple-50 p-6 rounded-xl shadow-md">
      {ratings.map((rating, index) => (
        <div key={index} className="flex items-center justify-between mb-4">
          <span className="font-medium text-gray-700">{rating.label}</span>
          <div className="flex items-center flex-1 mx-4">
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
          </div>
          <span className="font-bold text-gray-700">{rating.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewPercentageCard;
