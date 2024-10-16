import React from "react";

const ToDoCard = ({ title, description }) => {
  return (
    <div className="bg-purple-50 border-t-4 border-purple-500 shadow-lg rounded-md p-4 w-full mx-auto">
      <h2 className="text-xl font-bold text-purple-700 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ToDoCard;
