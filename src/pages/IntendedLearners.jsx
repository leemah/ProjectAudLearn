import React, { useState } from "react";

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

// Form component for Intended Learners
const IntendedLearners = () => {
  const [learningObjectives, setLearningObjectives] = useState([""]);

  // Handle input change
  const handleChange = (index, event) => {
    const values = [...learningObjectives];
    values[index] = event.target.value;
    setLearningObjectives(values);
  };

  // Handle adding a new input field
  const handleAddField = () => {
    setLearningObjectives([...learningObjectives, ""]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-full mx-auto">
      <h2 className="text-lg font-bold mb-4">Intended Learners</h2>
      <p className="text-sm mb-6">
        The following descriptions will be publicly visible on your Course
        Landing Page and will have a direct impact on your course performance.
        These descriptions will help learners decide if your course is right for
        them.
      </p>

      {/* Learning Objectives Section */}
      <h3 className="text-base font-semibold mb-2">
        What are your Learning Objectives
      </h3>
      {learningObjectives.map((objective, index) => (
        <div key={index} className="flex items-center mb-2">
          <InputField
            value={objective}
            onChange={(e) => handleChange(index, e)}
            placeholder="Enter learning objective"
          />
          <button
            type="button"
            onClick={handleAddField}
            className="text-purple-500 text-xl font-bold mt-2"
          >
            +
          </button>
        </div>
      ))}

      {/* Add new input field button */}
      {/* <button
        type="button"
        onClick={handleAddField}
        className="text-purple-500 text-xl font-bold mt-2"
      >
        +
      </button> */}

      {/* Additional sections can be added similarly */}
      <div className="mt-6">
        <h3 className="text-base font-semibold mb-2">
          What are your Course Requirements
        </h3>
        <InputField placeholder="Enter course requirements" />

        <h3 className="text-base font-semibold mt-4 mb-2">
          Who is this Course for?
        </h3>
        <InputField placeholder="Describe the intended learners" />
      </div>
    </div>
  );
};

export default IntendedLearners;
