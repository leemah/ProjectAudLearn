import React from "react";

const QuestionHeader = ({ title, description }) => {
  return (
    <div className="p-4 bg-[#633EA3]  mb-6 rounded-md shadow-sm ">
      <h2 className="text-lg text-[#f9f9f9] font-bold mb-1">{title}</h2>
      <p className="text-sm text-[#f9f9f9] mb-4 ">{description}</p>
    </div>
  );
};

export default QuestionHeader;
