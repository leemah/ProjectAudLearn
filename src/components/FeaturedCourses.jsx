import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();

        setCourses(data.courses); // Access the courses array
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-max mx-auto">
          <h2
            className="text-center text-[24px] font-bold  mb-8 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 py-2 px-4 rounded-md"
            style={{
              color: "var(--secondary-color)",
            }}
          >
            Featured Courses
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CardComponent
              id={course.id}
              key={course.id}
              profileImage={course.profileImage}
              courseImage={course.courseImage}
              courseTitle={course.courseTitle}
              userName={course.userName}
              level={course.level}
              rating={course.rating}
              price={course.price}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          {/* OnClick, navigate to the new /courses-all page */}
          <button
            className="text-orange-500 border border-orange-500 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white"
            onClick={() => navigate("/courses-all")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
