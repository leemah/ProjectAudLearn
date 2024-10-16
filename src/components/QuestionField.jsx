import React from "react";

// Reusable InputField component
const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-base font-semibold mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-purple-500 w-full p-2 text-lg focus:outline-none focus:border-purple-700 transition-all"
      />
    </div>
  );
};

// Reusable QuestionField component
const QuestionField = ({
  title,
  description,
  label,
  customStyles = "",
  value,
  onChange,
}) => {
  return (
    <div
      className={`p-4 bg-[#f7f4ff] border-l-2 border-[#633EA3] mb-6 rounded-md shadow-custom-boxShadow ${customStyles}`}
    >
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm mb-4 text-gray-600">{description}</p>

      <InputField
        label={label}
        value={value}
        onChange={onChange}
        placeholder="Type your response..."
      />
    </div>
  );
};

export default QuestionField;
