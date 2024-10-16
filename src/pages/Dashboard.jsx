import React from "react";
import SummaryCard from "../components/SummaryCard";
import AchievementSection from "../components/AchievementSection";
import TabSection from "../components/TabSection";
import { FaRegClock } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { IoTrophyOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SummaryCard
          count={5}
          label="Enrolled Courses"
          icon=<LuGraduationCap className="text-orange-500 w-10 h-10" />
        />
        <SummaryCard
          count={5}
          label="Overdue Courses"
          icon=<FaRegClock className="text-orange-500 w-10 h-10" />
        />
        <SummaryCard
          count={5}
          label="Completed Courses"
          icon=<IoTrophyOutline className="text-orange-500 w-10 h-10" />
        />
      </div>

      <AchievementSection />
      <TabSection />
    </div>
  );
};

export default Dashboard;
