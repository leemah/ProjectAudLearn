import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewPercentageCard from "./ReviewPercentageCard";
import ReviewDetails from "./ReviewDetails";

const ReviewSection = () => {
  // Example ratings for ReviewPercentageCard
  const ratings = [
    { label: "Excellent", percentage: 100 },
    { label: "Good", percentage: 70 },
    { label: "Average", percentage: 20 },
    { label: "Poor", percentage: 0 },
  ];

  return (
    <section>
      <h3 className="text-xl font-bold">Reviews</h3>
      <p className="text-gray-500 mb-6">
        What our students say about our course
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReviewCard rating={4.9} reviewsCount={15} />
        <ReviewPercentageCard ratings={ratings} />
      </div>

      <div className="mt-8">
        <ReviewDetails
          name="Muhammed Abdallah"
          date="Feb 15, 2022"
          rating={4}
          reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          userImage="../../public/assets/profile2.jpg"
        />
        <ReviewDetails
          name="Muhammed Abdallah"
          date="Feb 15, 2022"
          rating={4}
          reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          userImage="../../public/assets/profile1.jpg"
        />
        <button className="mt-4 text-orange-500 flex justify-center items-center font-semibold hover:underline">
          More Reviews
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
