import React, { useState } from "react";
import CourseList from "./CourseList";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="mt-10 sm:mt-12 lg:mt-20">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row">
        <button
          onClick={() => setActiveTab("courses")}
          className={`flex-1 p-4 sm:p-6 lg:p-8 text-left border-t-4 ${
            activeTab === "courses"
              ? "border-orange-500 bg-white"
              : "border-transparent bg-[#EEE7E7]"
          }`}
        >
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
            Courses
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Your recent courses
          </p>
        </button>

        <button
          onClick={() => setActiveTab("quizzes")}
          className={`flex-1 p-4 sm:p-6 lg:p-8 text-left border-t-4 ${
            activeTab === "quizzes"
              ? "border-orange-500 bg-white"
              : "border-transparent bg-[#EEE7E7]"
          }`}
        >
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
            Quizzes
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Your recent performance
          </p>
        </button>

        <button
          onClick={() => setActiveTab("forum")}
          className={`flex-1 p-4 sm:p-6 lg:p-8 text-left border-t-4 ${
            activeTab === "forum"
              ? "border-orange-500 bg-white"
              : "border-transparent bg-[#EEE7E7]"
          }`}
        >
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
            Forum Activity
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Latest forum topics and comments
          </p>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        {activeTab === "courses" && (
          <div>
            <CourseList />
          </div>
        )}
        {activeTab === "quizzes" && (
          <div>Your recent quiz performance will show here.</div>
        )}
        {activeTab === "forum" && (
          <div>Recent forum topics will show here.</div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
