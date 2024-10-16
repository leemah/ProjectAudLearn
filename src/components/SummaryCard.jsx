import React from "react";

const SummaryCard = ({ count, label, icon }) => {
  return (
    <div className="flex items-center justify-center bg-white shadow-md w-full rounded-lg p-2 md:p-4 lg:p-6 text-left h-40">
      {/* Icon - adjust margin for spacing */}
      <div className="mt-2 md:mt-4 lg:mt-6 mr-5">{icon}</div>
      {/* Count - dynamically adjusting font size */}
      <div>
        <div className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          {count}
        </div>
        {/* Label - Responsive font size */}
        <div className="text-sm md:text-base lg:text-lg text-gray-600 mt-2">
          {label}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
