import React from "react";
import HeroSection from "../components/HeroSection";
import Recommendations from "../components/Recommendations";
import HomeImage from "../assets/smilinglady.svg";
import FeaturedCourses from "../components/FeaturedCourses";
import SignUpCard from "../components/SignUpCard";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="grid grid-rows-1">
      <div className="relative">
        {/* Hero Section */}
        <HeroSection
          title="Empower Yourself Without Limits"
          description="Broaden your horizons by learning in-demand skills, tailored to suit your preferences and learning style."
          buttonText="Sign Up Now"
          imgSrc={HomeImage}
        />
        {/* Position Recommendations using transform */}
        <div className="relative transform -translate-y-12 z-10">
          <Recommendations />
        </div>
      </div>
      {/* Other sections */}
      <FeaturedCourses />
      <SignUpCard />
      <Testimonials />
    </div>
  );
};

export default Home;
