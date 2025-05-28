import React from "react";
import { navigationLinks } from "../data/navigation";
import { MdDashboard, MdHistory, MdCalendarToday, MdEventNote, MdBarChart, MdAssignment, MdChat, MdSupportAgent, MdSettings } from "react-icons/md";
import "../styles/Sidebar.css";

const iconMap = {
  MdDashboard,
  MdHistory,
  MdCalendarToday,
  MdEventNote,
  MdBarChart,
  MdAssignment,
  MdChat,
  MdSupportAgent,
  MdSettings,
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Health<span style={{ color: "#3DD598" }}>care.</span></div>
      <div className="sidebar-section">
        <div className="sidebar-heading">General</div>
        <nav>
          {navigationLinks.map(link => {
            const Icon = iconMap[link.icon];
            return (
              <div className="sidebar-link" key={link.label}>
                <Icon className="sidebar-icon" />
                <span>{link.label}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
