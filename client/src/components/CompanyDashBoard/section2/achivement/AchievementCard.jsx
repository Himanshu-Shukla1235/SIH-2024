import React from 'react';
import './AchievementCard.css'; // Import the CSS file

const AchievementCard = ({ title, description, date }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-header">
        <div className='achievement-title'><h3 className="achievement-title">{title}</h3></div>
        <span className="achievement-date">{date}</span>
      </div>
      <p className="achievement-description">{description}</p>
    </div>
  );
};

export default AchievementCard;
