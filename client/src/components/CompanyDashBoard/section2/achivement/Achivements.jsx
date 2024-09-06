import React from "react";
import AchievementCard from "./AchievementCard";

const achievements = [
  {
    title: " Z-Carbon Milestone",
    description: "",
    date: "March 2024",
  },
  {
    title: " Competitive ",
    description: "",
    date: "April 2024",
  },
  {
    title: " AWS",
    description: "",
    date: "July 2024",
  },
  {
    title: " Carbon",
    description: "",
    date: "July 2024",
  },
  {
    title: " Sinkgap",
    description: "",
    date: "July 2024",
  },

  // Add more achievements as needed
];

const AchievementsList = () => {
  return (
    <div className="achievements-list">
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={index}
          title={achievement.title}
          description={achievement.description}
          date={achievement.date}
        />
      ))}
    </div>
  );
};

export default AchievementsList;
