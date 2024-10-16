import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";

const CoursesAllPage = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;

  useEffect(() => {
    // Fetch all courses from the API
    const fetchCourses = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Get current courses based on pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=" py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Courses
        </h1>
        <div className="flex flex-wrap justify-center mb-6">
          {/* Add category filters here, similar to the ones in the image */}
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Design
          </button>
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Web Development
          </button>
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Programming
          </button>
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Game Development
          </button>
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Mobile Development
          </button>
          <button className="px-4 py-2  hover:bg-purple-600 hover:text-white rounded-md mx-2">
            Database Authentication
          </button>
          {/* Add more categories as needed */}
        </div>
        <div>
          <div className="flex justify-between mb-5 ">
            <h4 className="font-semibold">The Learning Journey Starts Here</h4>
            <h5 className="font-semibold text-[#633EA3]">My Learning</h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCourses.map((course) => (
              <CardComponent
                key={course.id}
                id={course.id}
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

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              {Array.from({
                length: Math.ceil(courses.length / coursesPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-[#F76103] text-white"
                        : "bg-gray-200 text-gray-700"
                    } px-3 py-1 rounded-full`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-between mb-5 ">
            <h4 className="font-semibold">The Learning Journey Starts Here</h4>
            <h5>My Learning</h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCourses.map((course) => (
              <CardComponent
                key={course.id}
                id={course.id}
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

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <ul className="flex space-x-2">
              {Array.from({
                length: Math.ceil(courses.length / coursesPerPage),
              }).map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-[#F76103] text-white"
                        : "bg-gray-200 text-gray-700"
                    } px-3 py-1 rounded-full`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAllPage;
