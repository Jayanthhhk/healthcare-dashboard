import React from "react";
import { anatomyIndicators } from "../data/healthData";
import "../styles/AnatomySection.css";

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src="/anatomy.png" alt="Human Anatomy" className="anatomy-img" />
      {/* Overlay indicators as in the screenshot */}
      {anatomyIndicators.map((item, idx) => (
        <div
          key={item.part}
          className="anatomy-indicator"
          style={{
            top: `${item.position.top}%`,
            left: `${item.position.left}%`,
            backgroundColor: item.color,
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default AnatomySection;
