import React from "react";
import { upcomingSchedule } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingSchedule.map(day => (
        <div key={day.day} className="schedule-day">
          <div className="schedule-day-title">On {day.day}</div>
          <div className="schedule-appointments">
            {day.appointments.map((appt, idx) => (
              <SimpleAppointmentCard key={idx} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;
