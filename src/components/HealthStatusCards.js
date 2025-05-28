import React from "react";
import { healthStatusCards } from "../data/healthData";
import "../styles/HealthStatusCards.css";

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map(card => (
        <div className="health-card" key={card.title} style={{ borderLeft: `4px solid ${card.color}` }}>
          <div className="card-title">{card.title}</div>
          <div className="card-date">{card.date}</div>
          <div className="card-status" style={{ color: card.color }}>{card.status}</div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
