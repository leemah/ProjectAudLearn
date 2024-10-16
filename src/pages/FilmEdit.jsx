import React, { useState } from "react";
import QuestionField from "../components/QuestionField";
import QuestionHeader from "../components/QuestionHeader";

const FilmEdit = () => {
  const [courseGoals, setCourseGoals] = useState("");
  const [courseOutline, setCourseOutline] = useState("");
  const [courseIntroduction, setCourseIntroduction] = useState("");
  const [practicalActivities, setPracticalActivities] = useState("");
  const [resources, setResources] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-full mx-[20px]">
      <QuestionHeader
        title="This is the time to impact Knowledge"
        description="Planning your course carefully will create a clear learning path for students and help you once you film. Think down to the details of each lecture including the skill you’ll teach, estimated video length, practical activities to include, and how you’ll create introductions and summaries."
      />
      <QuestionField
        title="Course Goals"
        description="State what your students should expect before they take your course."
        // label="Course Goals"
        value={courseGoals}
        onChange={(e) => setCourseGoals(e.target.value)}
      />

      <QuestionField
        title="Set the time limit"
        description="State the exact time limit of your videos"
        // label="Course Goals"
        value={courseOutline}
        onChange={(e) => setCourseOutline(e.target.value)}
      />

      <QuestionField
        title="Course Introduction"
        description="Make your course engaging for your students. State briefly the significant things they will learn."
        // label="Course Goals"
        value={courseIntroduction}
        onChange={(e) => setCourseIntroduction(e.target.value)}
      />
      <QuestionField
        title="Practical Activities"
        description="State the assignments and projects they are expected to do during your course"
        // label="Course Goals"
        value={practicalActivities}
        onChange={(e) => setPracticalActivities(e.target.value)}
      />
      <QuestionField
        title="Resources"
        description="Recommend resources to help your students improve further during your course."
        // label="Course Goals"
        value={resources}
        onChange={(e) => setResources(e.target.value)}
      />

      {/* You can add more QuestionField components here */}
    </div>
  );
};

export default FilmEdit;
