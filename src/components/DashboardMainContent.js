import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-bottom">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
}

export default DashboardMainContent;
