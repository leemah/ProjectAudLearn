// Card.js
import React from "react";

const TeachCardComponent = ({
  title,
  description,
  icon,
  buttonText,
  bgColor = "bg-customPurple bg-opacity-5", // Default background color
  iconColor = "bg-purple-600", // Default icon background color
  titleColor = "text-black", // Default title color
  textColor = "text-gray-700", // Default text color
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center h-[400px] ${bgColor}`}
    >
      <div
        className={`${iconColor} w-[50px] h-[50px] rounded-full flex items-center justify-center mb-5`}
      >
        {icon}
      </div>
      <h3 className={`font-bold text-xl mb-5 ${titleColor}`}>{title}</h3>
      <p className={`${textColor}`}>{description}</p>
      <button className="mt-10 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default TeachCardComponent;
