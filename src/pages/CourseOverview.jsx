import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import ReviewSection from "../components/ReviewSection";
import Navbar from "../components/Navbar";
import { MdPlayArrow, MdDownload, MdOutlineArticle } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { IoIosInfinite } from "react-icons/io";

// CourseOverview Component
const CourseOverview = () => {
  const { id } = useParams(); // Get course id from URL parameters
  const navigate = useNavigate(); // Use React Router's useNavigate hook
  const [course, setCourse] = useState(null); // Course state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch course data from db.json
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/db.json`);
        const data = await response.json();

        // Find the course by id
        const foundCourse = data.courses.find(
          (course) => course.id.toString() === id
        );

        if (foundCourse) {
          setCourse(foundCourse); // Set the found course
        } else {
          setError("Course not found");
        }
      } catch (err) {
        setError("Failed to fetch course data");
      } finally {
        setLoading(false); // Stop loading regardless of success/failure
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if course is not found
  }

  const handleStartCourse = () => {
    navigate(`/courses/${course.id}`); // Navigate to the /playcourse route
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="text-sm mb-2 text-gray-500 flex space-x-1">
              <a href="/" className="text-purple-600">
                Home
              </a>
              <span>{`>`}</span>
              <a href="/courses" className="text-purple-600">
                Courses
              </a>
              <span>{`>`}</span>
              <span>Introduction to Programming</span>
            </div>

            {/* Course Title */}
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              {course.title}
            </h1>

            {/* Course Tab */}
            <div className="flex flex-col md:flex-row  justify-between items-center my-6">
              {/* Course Details Section */}
              <div className="flex space-x-8">
                {/* Last Updated */}
                <div className="text-center">
                  <p className="text-gray-500">Last Updated</p>
                  <p className="font-bold">{course.lastUpdated}</p>
                </div>
                {/* Level */}
                <div className="text-center">
                  <p className="text-gray-500">Level</p>
                  <p className="font-bold">{course.level}</p>
                </div>
                {/* Students */}
                <div className="text-center">
                  <p className="text-gray-500">Students</p>
                  <p className="font-bold">{course.students}</p>
                </div>
                {/* Language */}
                <div className="text-center">
                  <p className="text-gray-500">Language</p>
                  <p className="font-bold">{course.language}</p>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="flex space-x-4 mt-2 md:mt-0">
                <button className="bg-[#FDECE2] px-6 py-2 flex items-center space-x-2 rounded-md">
                  <i className="fas fa-heart"></i>
                  <span className="text-gray-600">Wishlist</span>
                </button>
                <button className="bg-[#FDECE2] px-6 py-2 flex items-center space-x-2 rounded-md">
                  <i className="fas fa-share-alt"></i>
                  <span className="text-gray-600">Share</span>
                </button>
              </div>
            </div>
            {/* Video section */}
            <div className="mb-4 rounded-2xl">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/SqcY0GlETPk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>

            {/* Others */}
            <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p>{course.overview}</p>
            </div>

            <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
              <h3 className="text-xl font-semibold">What you will learn</h3>
              <ul>
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
              <h3 className="text-xl font-semibold">Requirements</h3>
              <ul>
                {course.requirements.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </div>

            {/* Review section */}
            <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
              <ReviewSection />
            </div>
          </div>

          <div className="lg:col-span-1  p-[20px]">
            <div className="border border-black rounded-[15px]">
              <div className="p-4">
                <p className="text-2xl font-bold text-[#633EA3]">
                  ${course.price}
                </p>
                <button
                  className="w-full bg-orange-500 text-white py-2 rounded-md mt-4"
                  onClick={handleStartCourse}
                >
                  Start Course
                </button>
                <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-md mt-4">
                  Add to Cart
                </button>
              </div>

              <div className="border border-b-black border-b-1"></div>

              <div className="p-4">
                <h4 className="font-semibold">This course Includes:</h4>
                <ul>
                  <li className="flex items-center">
                    <div className="border border-[#000000] mr-4 ">
                      <MdPlayArrow size={10} className="text-[#000]" />
                    </div>
                    <span>2 hours on demand video</span>
                  </li>
                  <li className="flex items-center">
                    <div className="border border-[#000000] mr-4 ">
                      <MdOutlineArticle size={10} className="text-[#000]" />
                    </div>
                    <span>1 article</span>
                  </li>

                  <li className="flex items-center">
                    <div className="border border-[#000000] mr-4 ">
                      <MdDownload size={10} className="text-[#000]" />
                    </div>
                    <span>10 downloadable resources</span>
                  </li>

                  <li className="flex items-center">
                    <div className="border border-[#000000] mr-4 ">
                      <IoIosInfinite size={10} className="text-[#000]" />
                    </div>
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center">
                    <div className="border border-[#000000] mr-4 ">
                      <PiCertificate size={10} className="text-[#000]" />
                    </div>
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
              <div className="border border-b-black border-b-1"></div>

              <div className=" p-4">
                <h4 className="font-semibold">About Instructor</h4>
                <div className="flex items-center">
                  <img
                    src={course.instructor.profileImage}
                    alt="Instructor"
                    className="h-12 w-12 rounded-full"
                  />
                  <p className="font-bold ml-3">{course.instructor.name}</p>
                </div>
                <p className="text-gray-500">{course.instructor.title}</p>
                <p className="text-gray-500">
                  {course.instructor.rating} Instructor Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
// import { useParams, useNavigate } from "react-router-dom";
// import { FaCheck } from "react-icons/fa6";
// import ReviewSection from "../components/ReviewSection";
// import Navbar from "../components/Navbar";
// import { MdPlayArrow, MdDownload, MdOutlineArticle } from "react-icons/md";
// import { PiCertificate } from "react-icons/pi";
// import { IoIosInfinite } from "react-icons/io";
// import InstructorImage from "../assets/images/InstructorImage.jpg";

// // This is just dummy data for now
// const courses = [
//   {
//     id: 1,
//     title: "Programming Language: Hands-On Introduction for Beginners",
//     level: "Beginner",
//     language: "English",
//     students: 10000,
//     price: 25,
//     rating: 4.9,
//     lastUpdated: "Feb 2022",
//     instructor: {
//       name: "Dr. Oladunji",
//       profileImage: InstructorImage,
//       courses: 15,
//       title: "Founder, Tech Hub",
//     },
//     overview: "Lorem ipsum dolor sit amet...",
//     whatYouWillLearn: [
//       "Lorem ipsum dolor sit amet",
//       "Consectetur adipiscing elit",
//       "Curabitur convallis mollis purus",
//     ],
//     requirements: [
//       "Basic understanding of programming",
//       "Computer with internet access",
//     ],
//     reviews: [
//       {
//         id: 1,
//         name: "Muhammed Abdallah",
//         date: "Feb 15, 2022",
//         rating: 5,
//         comment: "Great course!",
//       },
//       // More reviews...
//     ],
//   },
//   // More courses...
// ];

// const CourseOverview = () => {
//   const { id } = useParams(); // This will give you the course id from the route
//   console.log("Requested Course ID:", id); // Log the requested course ID
//   console.log("Available Courses:", courses);

//   const course = courses.find((course) => course.id.toString() === id); // Find course based on id
//   console.log("Found Course:", course);

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   const navigate = useNavigate(); // Use React Router's useNavigate hook

//   const handleStartCourse = () => {
//     navigate("/playcourse"); // Navigate to the /playcourse route
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto py-10 px-5 md:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             {/* Course Title */}
//             <h1 className="text-2xl lg:text-3xl font-bold mb-4">
//               {course.title}
//             </h1>
//             {/* Course Tab */}
//             <div className="flex flex-col md:flex-row  justify-between items-center my-6">
//               {/* Course Details Section */}
//               <div className="flex space-x-8">
//                 {/* Last Updated */}
//                 <div className="text-center">
//                   <p className="text-gray-500">Last Updates</p>
//                   <p className="font-bold">{course.lastUpdated}</p>
//                 </div>
//                 {/* Level */}
//                 <div className="text-center">
//                   <p className="text-gray-500">Level</p>
//                   <p className="font-bold">{course.level}</p>
//                 </div>
//                 {/* Students */}
//                 <div className="text-center">
//                   <p className="text-gray-500">Students</p>
//                   <p className="font-bold">{course.students}</p>
//                 </div>
//                 {/* Language */}
//                 <div className="text-center">
//                   <p className="text-gray-500">Language</p>
//                   <p className="font-bold">{course.language}</p>
//                 </div>
//               </div>

//               {/* Buttons Section */}
//               <div className="flex space-x-4 mt-2 md:mt-0">
//                 <button className="bg-[#FDECE2] px-6 py-2 flex items-center space-x-2 rounded-md">
//                   <i className="fas fa-heart"></i>
//                   <span className="text-gray-600">Wishlist</span>
//                 </button>
//                 <button className="bg-[#FDECE2] px-6 py-2 flex items-center space-x-2 rounded-md">
//                   <i className="fas fa-share-alt"></i>
//                   <span className="text-gray-600">Share</span>
//                 </button>
//               </div>
//             </div>
//             {/* Video section */}
//             <div className="mb-4 rounded-2xl">
//               <iframe
//                 width="100%"
//                 height="315"
//                 src="https://www.youtube.com/embed/SqcY0GlETPk"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-2xl"
//               ></iframe>
//             </div>

//             {/* Others */}
//             <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
//               <h3 className="text-xl font-semibold">Overview</h3>
//               <p>{course.overview}</p>
//             </div>

//             <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
//               <h3 className="text-xl font-semibold">What you will learn</h3>
//               <ul>
//                 {course.whatYouWillLearn.map((item, index) => (
//                   <li key={index}>✔ {item}</li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
//               <h3 className="text-xl font-semibold">Requirements</h3>
//               <ul>
//                 {course.requirements.map((item, index) => (
//                   <li key={index}>✔ {item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Review section */}
//             <div className="mb-4 border border-[#000000] px-14 py-[20px] rounded-[15px]">
//               <ReviewSection />
//             </div>
//           </div>

//           <div className="lg:col-span-1  p-[20px]">
//             <div className="border border-black rounded-[15px]">
//               <div className="p-4">
//                 <p className="text-2xl font-bold text-[#633EA3]">
//                   ${course.price}
//                 </p>
//                 <button
//                   className="w-full bg-orange-500 text-white py-2 rounded-md mt-4"
//                   onClick={handleStartCourse}
//                 >
//                   Start Course
//                 </button>
//                 <button className="w-full border border-orange-500 text-orange-500 py-2 rounded-md mt-4">
//                   Add to Cart
//                 </button>
//               </div>

//               <div className="border border-b-black border-b-1"></div>

//               <div className="p-4">
//                 <h4 className="font-semibold">This course Includes:</h4>
//                 <ul>
//                   <li className="flex items-center">
//                     <div className="border border-[#000000] mr-4 ">
//                       <MdPlayArrow size={10} className="text-[#000]" />
//                     </div>
//                     <span>2 hours on demand video</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="border border-[#000000] mr-4 ">
//                       <MdOutlineArticle size={10} className="text-[#000]" />
//                     </div>
//                     <span>1 article</span>
//                   </li>

//                   <li className="flex items-center">
//                     <div className="border border-[#000000] mr-4 ">
//                       <MdDownload size={10} className="text-[#000]" />
//                     </div>
//                     <span>10 downloadable resources</span>
//                   </li>

//                   <li className="flex items-center">
//                     <div className="border border-[#000000] mr-4 ">
//                       <IoIosInfinite size={10} className="text-[#000]" />
//                     </div>
//                     <span>Full lifetime access</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="border border-[#000000] mr-4 ">
//                       <PiCertificate size={10} className="text-[#000]" />
//                     </div>
//                     <span>Certificate of completion</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="border border-b-black border-b-1"></div>

//               <div className=" p-4">
//                 <h4 className="font-semibold">About Instructor</h4>
//                 <div className="flex items-center">
//                   <img
//                     src={course.instructor.profileImage}
//                     alt=""
//                     className="rounded-full w-[40px] h-[40px] mr-2"
//                   />
//                   <div>
//                     <p className="font-semibold">{course.instructor.name}</p>
//                     <p className="text-gray-500 font-semibold">
//                       {course.instructor.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseOverview;
