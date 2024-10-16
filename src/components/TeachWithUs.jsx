import React from "react";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { TiGlobe } from "react-icons/ti";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TeachWithUs = () => {
  return (
    <div className="container mx-auto my-20">
      <h2
        className="text-center text-3xl font-bold mb-8"
        style={{
          color: "var(--secondary-color)",
        }}
      >
        Why Teach With Us?
      </h2>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center h-[400px] bg-customPurple bg-opacity-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }} // Adjust duration and delay as needed
        >
          <div className="bg-purple-600 w-[50px] h-[50px] rounded-full flex items-center justify-center mb-5">
            <FaGraduationCap className="text-white w-[25px] h-[25px]" />
          </div>
          <h3 className="font-bold text-xl mb-5 text-[#633EA3]">
            Transform Education
          </h3>
          <p className="text-[#633EA3]">
            Equip students with skills and knowledge to thrive in the modern
            world.
          </p>
          <button className="mt-10 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white">
            Join Now
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center h-[400px] bg-customOrange bg-opacity-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} // Adjust duration and delay as needed
        >
          <div className="bg-customOrange w-[50px] h-[50px] rounded-full flex items-center justify-center mb-5">
            <TiGlobe className="text-white w-[25px] h-[25px]" />
          </div>
          <h3 className="font-bold text-xl mb-5 text-customOrange">
            Reach Students Globally
          </h3>
          <p className="text-customOrange">
            Break barriers with education and inspire students globally.
          </p>
          <button className="mt-10 px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white">
            Join Now
          </button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg text-center h-[400px] bg-customPurple bg-opacity-5"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }} // Adjust duration and delay as needed
        >
          <div className="bg-purple-600 w-[50px] h-[50px] rounded-full flex items-center justify-center mb-5">
            <FaLightbulb className="text-white w-[25px] h-[25px]" />
          </div>
          <h3 className="font-bold text-xl mb-5 text-[#633EA3]">
            Empower Learners Everywhere
          </h3>
          <p className="text-[#633EA3]">
            Inspire and uplift students from diverse backgrounds.
          </p>
          <button className="mt-10 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white">
            Join Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TeachWithUs;
