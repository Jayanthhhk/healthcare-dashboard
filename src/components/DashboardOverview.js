import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../styles/DashboardOverview.css";

function DashboardOverview() {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
}

export default DashboardOverview;
