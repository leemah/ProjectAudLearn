import React from "react";
import HeroSection from "../components/HeroSection";
import Recommendations from "../components/Recommendations";
// import InstructorImage from "../assets/images/InstructorImage.jpg";
import InstructorImage from "../assets/images/InstructorImg2.png";
import ToDoSection from "../components/ToDoSection";
import SignUpCard from "../components/SignUpCard";
import TrainersTestimonial from "../components/TrainersTestimonial";
import TeachWithUs from "../components/TeachWithUs";

const InstructorLanding = () => {
  return (
    <div>
      <HeroSection
        title="Teach the World"
        description="Share your knowledge and help others grow their skills."
        buttonText="Become an Instructor"
        imgSrc={InstructorImage}
        isInstructor={true}
      />
      <Recommendations />
      <TeachWithUs />
      <TrainersTestimonial />
      <ToDoSection />
      <SignUpCard />
    </div>
  );
};

export default InstructorLanding;
