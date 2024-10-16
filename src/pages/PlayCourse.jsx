import { AiOutlineCheck } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineShareAlt, AiOutlineSave } from "react-icons/ai";

const PlayCourse = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const [activeTab, setActiveTab] = useState("Description");
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Ensure courseId is defined before making the fetch request
    const fetchCourseData = async () => {
      try {
        const response = await fetch("/db.json"); // Fetch from public/db.json
        const data = await response.json();

        // Find the course with the matching courseId
        const course = data.courses.find((c) => c.id === parseInt(courseId));
        if (course) {
          setCourseData(course); // Set the course data
        } else {
          console.error("Course not found");
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    if (courseId) {
      fetchCourseData(); // Fetch the course data if courseId is available
    }
  }, [courseId]);

  if (!courseData) {
    return <p>Loading...</p>;
  }

  const { title, subtitle, videos, instructor, outline } = courseData;

  return (
    <div className="flex flex-col lg:flex-row p-4 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section */}
      <div className=" w-full">
        <div className="w-full p-4">
          {/* Breadcrumb */}
          <div className="text-gray-500 text-sm mb-2">
            <span>My Courses</span> <span className="mx-1">/</span>
            <span className="font-semibold">{subtitle}</span>
          </div>

          {/* Course Title and Subtitle */}
          <div className="flex justify-between items-start">
            <div>
              {/* Subtitle */}
              <h2 className="text-xl font-bold">{title}</h2>
              {/* Instructor Name */}
              <p className="text-gray-500 mt-1">{instructor.name}</p>
            </div>

            {/* Icons */}
            <div className="flex space-x-4">
              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full hover:bg-gray-100">
                <AiOutlineShareAlt className="w-5 h-5 text-purple-600" />
              </button>

              <button className="w-10 h-10 flex justify-center items-center border border-gray-300 rounded-full hover:bg-gray-100">
                <AiOutlineSave className="w-5 h-5 text-purple-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gray-200 rounded-md">
          <video
            className="w-full h-full object-cover rounded-md"
            src={videos.mainVideo}
            controls
          />
          <div className="absolute top-0 left-0 w-1/4 h-1/4 p-1">
            <video
              className="w-full h-full object-cover rounded-md"
              src={videos.overlayVideo}
              controls
            />
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-6 border-b">
          <div className="flex space-x-6 text-gray-600">
            {[
              "Description",
              "Reviews",
              "Discussion",
              "Resources",
              "Instructor",
            ].map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-sm md:text-base ${
                  activeTab === tab ? "border-b-2 border-orange-500" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "Description" && (
            <p className="text-gray-700 text-sm md:text-base">
              This is the course description for {title}...
            </p>
          )}
          {/* Add other tab content here */}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full bg-white p-6 border border-l-[#121212]">
        <div className="mb-6">
          <h3 className="text-lg font-bold">About the Course</h3>
          <hr className="border-t-2 border-gray-200 mt-2 mb-4" />
          <div className="flex items-center space-x-4">
            <img
              src={instructor.profileImage}
              alt="Instructor"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-base">{instructor.name}</p>
              <p className="text-sm text-gray-500">{instructor.title}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {instructor.bio}
            <span
              style={{
                color: "var(--primary-color)",
              }}
              className="cursor-pointer font-semibold"
            >
              read more
            </span>
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-base font-semibold">Course Completion</h4>
          <div className="flex items-center justify-between text-sm mt-2">
            <p className="text-gray-600">35% Completed</p>
            <p className="text-gray-600">4/10</p>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: "35%" }}
            />
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-base font-semibold mb-4">Course Outline</h4>
          <div className="space-y-4 text-sm">
            {outline.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <p
                  className={
                    item.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }
                >
                  {`${index + 1}. ${item.title}`}
                </p>
                {item.completed && <AiOutlineCheck className="text-gray-600" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayCourse;
