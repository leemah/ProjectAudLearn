import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  description,
  buttonText,
  imgSrc,
  isInstructor,
}) => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-10">
      <div
        className={`container mx-auto flex flex-col justify-center items-center mt-5 ${
          isInstructor ? `md:flex-row-reverse` : "md:flex-row"
        } `}
      >
        {/* Left side: Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left p-4"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#633EA3]">
            {title}
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {description}
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
            {buttonText}
          </button>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          className="md:w-3/4 mt-6 md:mt-0 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }} // Optional delay for the image
        >
          <img
            src={imgSrc}
            alt="Hero section"
            className="w-[90%] md:w-full h-auto max-h-[400px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
