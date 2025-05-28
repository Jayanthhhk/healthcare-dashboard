import React from "react";
import { weeklyActivity } from "../data/activity";
import "../styles/ActivityFeed.css";

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="activity-title">Activity</div>
      <div className="activity-bar-chart">
        {weeklyActivity.map(day => (
          <div className="activity-bar" key={day.day}>
            <div className="bar" style={{ height: `${day.value * 15}px` }}></div>
            <div className="bar-label">{day.day}</div>
          </div>
        ))}
      </div>
      <div className="activity-summary">3 appointments on this week</div>
    </div>
  );
}

export default ActivityFeed;
