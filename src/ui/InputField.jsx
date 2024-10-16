import React from "react";

const InputField = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      {/* Label */}
      <label className="text-lg font-semibold mb-2">{label}</label>

      {/* Input Field */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-purple-500 rounded-lg px-4 py-2 text-lg focus:outline-none focus:border-purple-700 transition-all focus:ring-2 focus:ring-purple-700
"
      />
    </div>
  );
};

export default InputField;
