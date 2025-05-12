// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`w-full md:w-64 bg-white p-4 rounded-lg shadow-md transition-width duration-300 ease-in-out ${
        isOpen ? 'md:w-64' : 'md:w-16'
      }`}
    >
      <ul className="space-y-4">
        <li>
          <Link to="/Dashboard" className="text-lg font-bold">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses" className="text-lg">Courses</Link>
        </li>
        <li>
          <Link to="/chats" className="text-lg">Chats</Link>
        </li>
        <li>
          <Link to="/grades" className="text-lg">Grades</Link>
        </li>
        <li>
          <Link to="/mentors" className="text-lg">Mentors</Link>
        </li>
        <li>
          <Link to="/settings" className="text-lg">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;