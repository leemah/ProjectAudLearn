import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    // Fetching data from db.json located in the public folder
    const fetchCourses = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();

        if (data.courses) {
          // Set only the first 3 courses from the 'courses' array
          setCourses(data.courses.slice(0, 3));
        } else {
          console.error("Courses not found in the response data.");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleContinue = (courseId) => {
    // Navigate to the playcourse page with the course ID
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="mt-6">
      {courses.map((course, index) => (
        <div key={course.id}>
          <div className="p-4 mb-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <img
                src={course.courseImage}
                alt="course"
                className="rounded-lg w-24 h-24 mb-4 md:mb-0"
              />
              <div className="ml-0 md:ml-4 text-center md:text-left">
                <h3 className="font-bold">{course.courseTitle}</h3>
                <p className="text-gray-500">{course.overview}</p>
              </div>
            </div>

            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <div className="h-2 bg-gray-300 rounded-full w-full">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${course.progress || 50}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => handleContinue(course.id)} // Trigger navigation on click
              className="mt-4 md:mt-0 ml-0 md:ml-4 bg-transparent border border-[#F76103] text-[#F76103] hover:bg-orange-500 hover:text-[#f9f9f9] px-10 py-2 rounded w-full md:w-auto"
            >
              Continue
            </button>
          </div>
          {/* Horizontal rule */}
          {index < courses.length - 1 && (
            <hr className="border-t border-gray-300" />
          )}
        </div>
      ))}

      <button className="bg-orange-500 text-white px-4 py-2 rounded w-full md:w-auto">
        View All
      </button>
    </div>
  );
};

export default CourseList;
