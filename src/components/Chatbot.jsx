import React from "react";
import { FiX } from "react-icons/fi";

const Chatbot = () => {
  return (
    <div className=" right-8">
      {/* Chatbot Box */}
      <div className="bg-white shadow-lg rounded-lg p-4 relative w-[280px] h-auto flex flex-col items-center">
        <div className="text-center">
          <p className="text-[#633EA3] text-2xl font-bold mb-2">
            Talk to Bobo, our chatbot
          </p>
        </div>

        {/* Chat message bubble */}
        <div className="flex items-start mt-4 relative bg-[#F4F4F4] rounded-lg p-3 w-auto">
          <div className="flex items-center">
            <span className="text-orange-500 text-xl mr-2">👋</span>
            <span className="text-[#FF7133] font-medium">
              Hi, let us know how we can help you.
            </span>
          </div>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-[#F4F4F4] border-t border-r border-[#0a72d8] rotate-45"></div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mt-4">
          <span className="text-6xl">👨🏽‍🦱</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
