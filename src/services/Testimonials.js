import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Fetching testimonials from API
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/ab1f0aa2-11d0-4bc6-aa7f-e4b3dec21693"
        );
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return <p>Loading testimonials...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 space-x-6 bg-white">
      {/* Testimonial Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-purple-600 text-xl font-bold">
          Our Students Voice
        </h2>
        <blockquote className="mt-4 text-lg italic text-gray-700">
          "{testimonials[currentTestimonial].quote}"
        </blockquote>
        <p className="mt-2 text-gray-700">
          {testimonials[currentTestimonial].content}
        </p>
        <div className="mt-4">
          <p className="font-semibold text-purple-700">
            {testimonials[currentTestimonial].name}
          </p>
          <p className="text-gray-500">
            {testimonials[currentTestimonial].location}
          </p>
        </div>
        {/* Scrolling indicators */}
        <div className="flex justify-center md:justify-start mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-8 rounded-full ${
                currentTestimonial === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Image Section */}
      <div className="relative md:w-1/2 mt-6 md:mt-0">
        <img
          className="rounded-lg object-cover w-full h-64"
          src={testimonials[currentTestimonial].image}
          alt={testimonials[currentTestimonial].name}
        />
        {/* Orange circle behind the image */}
        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-orange-500 -z-10"></div>
      </div>
    </div>
  );
};

export default Testimonials;
