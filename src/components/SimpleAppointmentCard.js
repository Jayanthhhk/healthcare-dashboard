import React from "react";
import { MdCheckCircle, MdVisibility, MdFavorite, MdPsychology } from "react-icons/md";
import "../styles/SimpleAppointmentCard.css";

const iconMap = {
  MdCheckCircle,
  MdVisibility,
  MdFavorite,
  MdPsychology,
};

function SimpleAppointmentCard({ title, time, icon }) {
  const Icon = iconMap[icon];
  return (
    <div className="appointment-card">
      <Icon className="appointment-icon" />
      <div>
        <div className="appointment-title">{title}</div>
        <div className="appointment-time">{time}</div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;
