import React from "react";

const AchievementSection = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-20 flex flex-col md:flex-row justify-between">
      <div className="flex-1 text-center border-b md:border-r md:border-b-0 pb-4 md:pb-0">
        <div className="text-orange-500 font-bold">Reward</div>
        <div>Your latest achievement</div>
        <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
          View All
        </button>
      </div>
      <div className="flex-1 text-center pt-4 md:pt-0">
        <div className="text-orange-500 font-bold">Certificates (3)</div>
        <div>Your latest certificate</div>
        <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
          View All
        </button>
      </div>
    </div>
  );
};

export default AchievementSection;
