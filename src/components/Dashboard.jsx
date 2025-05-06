import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa"; // Fixed import for FaUserCircle
import { MdDashboard, MdBook, MdChat, MdAssessment, MdSettings } from "react-icons/md"; // Sidebar icons
//import { format } from "date-fns"; // For formatting the date

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const today = new Date();
  const currentDate = today.getDate(); // Get the current date

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen text-gray-800">
      {/* Sidebar */}
      <div
        className={`shadow-lg rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col p-6 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } m-4`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="mb-8 text-gray-200 hover:text-yellow-300 transition"
        >
          {sidebarOpen ? "⬅️" : "➡️"}
        </button>

        {/* Sidebar Content */}
        {sidebarOpen && <h1 className="text-2xl font-bold mb-10">Elearn.com</h1>}
        <nav className="flex flex-col space-y-4">
          <Link
            to="/Dashboard"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdDashboard className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Dashboard"}
          </Link>
          <Link
            to="/courses"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdBook className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Courses"}
          </Link>
          <Link
            to="/chats"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdChat className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Chats"}
          </Link>
          <Link
            to="/grades"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdAssessment className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Grades"}
          </Link>
          <Link
            to="/mentors"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdAssessment className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Mentors"}
          </Link>
          <Link
            to="/settings"
            className="flex items-center text-lg hover:text-yellow-300 transition"
          >
            <MdSettings className={`mr-2 ${!sidebarOpen && "mx-auto"}`} />
            {sidebarOpen && "Settings"}
          </Link>
        </nav>

        {/* Upgrade Card */}
        {sidebarOpen && (
          <div className="mt-auto p-4 rounded-lg text-center border border-yellow-300">
            <p className="mb-2 font-medium">Let’s upgrade to premium features</p>
            <button className="py-2 px-4 rounded-lg border border-yellow-600 text-yellow-600 hover:bg-yellow-100 transition">
              Upgrade
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search for class, task, etc..."
            className="w-1/2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 text-xl" />
            <FaUserCircle className="text-gray-600 text-2xl" /> {/* Fixed icon */}
          </div>
        </div>

        {/* Main Banner */}
        <div className="p-6 rounded-xl flex items-center justify-between mb-8 shadow-lg bg-white">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-600">Learning is Fun!</h2>
            <p>
              Learn anytime, anywhere without any time limit — all through the
              application.
            </p>
            <button className="mt-4 py-2 px-4 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
              Get Started
            </button>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="Learning Illustration"
            className="w-40"
          />
        </div>

        {/* Score Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 rounded-lg shadow-lg text-center bg-white">
            <h3 className="text-xl font-bold mb-2 text-blue-600">92%</h3>
            <p>Progress Score</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg text-center bg-white">
            <h3 className="text-xl font-bold mb-2 text-blue-600">8</h3>
            <p>Completed Courses</p>
          </div>
          <div className="p-4 rounded-lg shadow-lg text-center bg-white">
            <h3 className="text-xl font-bold mb-2 text-blue-600">16h</h3>
            <p>Learning Hours</p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="p-6 rounded-xl shadow-lg bg-white">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Your Calendar</h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-semibold text-blue-600">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg cursor-pointer transition ${
                  i + 1 === currentDate ? "bg-blue-200" : "hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}