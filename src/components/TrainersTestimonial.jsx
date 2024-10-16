import React, { useState } from "react";
import instructorImage from "../assets/images/instructortestimonial.jpg";

const TrainersTestimonial = () => {
  // Testimonials data
  const testimonials = [
    {
      name: "David Divad",
      course: "Data Science & IT Certifications",
      text: "I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.",
      imageUrl: instructorImage,
    },
    {
      name: "Jane Doe",
      course: "Web Development Instructor",
      text: "I enjoy teaching web development because it allows me to help others build projects that make a real difference. Seeing students transform their skills into something tangible is a reward in itself.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "John Smith",
      course: "AI & Machine Learning Trainer",
      text: "Teaching AI and ML is a thrilling experience. I love seeing students grasp concepts that are shaping the future of technology and using them to innovate in their own way.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  // State to track current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle clicking on a pagination dot
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 bg-white">
      <h3 className="text-2xl font-semibold text-center text-purple-600">
        What Our Trainers Say...
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        {/* Trainer Image */}
        <div className="w-1/2 md:w-1/3 flex justify-center">
          <img
            src={testimonials[currentIndex].imageUrl}
            alt={testimonials[currentIndex].name}
            className=" object-cover"
          />
        </div>

        {/* Testimonial Text */}
        <div className="md:w-2/3 mt-6 md:mt-0 px-6 text-center md:text-left">
          <p className="text-gray-600 mb-4">
            {testimonials[currentIndex].text}
          </p>
          <h4 className="font-bold text-lg text-purple-700">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-purple-500">{testimonials[currentIndex].course}</p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-orange-500"
                : "bg-gray-300 hover:bg-orange-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TrainersTestimonial;
