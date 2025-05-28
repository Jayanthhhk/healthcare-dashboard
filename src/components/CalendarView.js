import React from "react";
import { calendarAppointments } from "../data/appointments";
import "../styles/CalendarView.css";

function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <span>October 2021</span>
      </div>
      <div className="calendar-grid">
        {/* Render days and appointment times */}
        {calendarAppointments.map(app => (
          <div className="calendar-day" key={app.day + app.time}>
            <span>{app.day}</span>
            <span className="calendar-appointment">{app.time}</span>
          </div>
        ))}
      </div>
      <div className="calendar-appointments-list">
        <div className="calendar-card dentist">
          Dentist<br />
          09:00-11:00<br />
          Dr. Cameron Williamson
        </div>
        <div className="calendar-card physio">
          Physiotherapy Appointment<br />
          11:00-12:00<br />
          Dr. Kevin Djones
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
