import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
