import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoSection = () => {
  // Data for the to-do steps
  const steps = [
    {
      title: "Get your Lessons Ready",
      description:
        "You start with your passion and knowledge. Then choose a suitable topic with the help of our Marketplace Insights tool. You can teach in a way that’s suitable for you.",
    },
    {
      title: "Make a Course Video Presentation",
      description:
        "Make a 3hr Video using tools like a smartphone or a DSLR camera, a good microphone.",
    },
    {
      title: "Submit your Video on Our Platform for Reviews",
      description:
        "Contact our Mentors and Project Reviewers and submit your video(s) for review. You’ll be contacted if your video(s) is accepted.",
    },
    {
      title: "Publish your Video",
      description:
        "Your video would be published on our platform with our approval. Whether it would be a free or paid course would be discussed between the author and the platform team.",
    },
  ];

  return (
    <div className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-purple-700 mb-8">
          What to do?
        </h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <ToDoCard
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoSection;
