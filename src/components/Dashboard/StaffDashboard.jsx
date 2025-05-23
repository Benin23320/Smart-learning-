import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area } from "recharts";
import {
  FaBell,
  FaUserCircle,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaComments,
  FaPlus,
  FaChartLine,
  FaClipboardList,
  FaStar
} from "react-icons/fa";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
    Pie,
    Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState(new Date());

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const mentorNavItems = [
    { label: "Dashboard", icon: <FaChartLine />, to: "/teacher-dashboard" },
    { label: "Sessions", icon: <FaCalendarAlt />, to: "/sessions" },
    { label: "Doubt Queue", icon: <FaComments />, to: "/doubt-queue" },
    { label: "Performance", icon: <FaChartLine />, to: "/performance" },
    { label: "Content", icon: <FaPlus />, to: "/content" },
    { label: "Feedback", icon: <FaClipboardList />, to: "/feedback" },
    { label: "Settings", icon: <FaUserCircle />, to: "/settings" }
  ];

  const meetingData = [
    { time: "10:00", status: "Attended" },
    { time: "11:00", status: "Not Attended" },
    { time: "12:00", status: "Attended" },
    { time: "13:00", status: "Not Attended" },
    { time: "14:00", status: "Attended" }
  ];

  const formattedData = meetingData.map((entry) => ({
    time: entry.time,
    value: 1,
    color: entry.status === "Attended" ? "#f87171" : "#4ade80"
  }));

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-indigo-900 to-indigo-800 text-white p-4 transition-all duration-300 shadow-xl rounded-r-3xl ${sidebarOpen ? "w-64" : "w-20"}`}>
        <div className="flex items-center mb-6">
          <FaUserCircle className="text-3xl text-white" />
          {sidebarOpen && (
            <div className="ml-3">
              <h2 className="text-base font-semibold">Jane Smith</h2>
              <p className="text-sm text-gray-300">Mentor</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="text-white mb-6 flex items-center justify-center hover:text-yellow-400 transition"
        >
          {sidebarOpen ? <FaAngleDoubleLeft size={22} /> : <FaAngleDoubleRight size={22} />}
        </button>

        <nav className="space-y-4">
          {mentorNavItems.map(({ label, icon, to }) => (
            <Link
              key={label}
              to={to}
              className="flex items-center gap-3 text-sm font-medium hover:text-yellow-400 transition py-2 px-3 rounded-lg hover:bg-indigo-700"
            >
              <span className={`${!sidebarOpen ? "mx-auto" : ""}`}>{icon}</span>
              {sidebarOpen && label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-indigo-700">Teacher Dashboard</h1>
          <FaBell className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer" />
        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-6 flex justify-between items-center shadow-lg mb-6">
          <div>
            <h2 className="text-2xl font-bold">Welcome, Jane!</h2>
            <p className="text-sm mt-1">Manage your sessions and guide learners.</p>
            <button className="mt-4 px-4 py-2 text-black bg-white hover:bg-gray-100 rounded-lg transition">
              View Schedule
            </button>
          </div>
          <FaChalkboardTeacher className="text-6xl text-white mr-10" />
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[{
            title: "Upcoming Sessions",
            value: "3",
            color: "bg-blue-100 text-blue-600"
          }, {
            title: "Student Doubts",
            value: "12",
            color: "bg-yellow-100 text-yellow-600"
          }, {
            title: "Content Created",
            value: "18",
            color: "bg-green-100 text-green-600"
          }].map(({ title, value, color }) => (
            <div className={`p-4 rounded-xl shadow-md ${color}`} key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-3xl mt-2 font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Graph and Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Meeting Graph */}
          <div className="bg-white p-6 rounded-xl shadow-md">
  <h2 className="text-xl font-semibold text-indigo-700 mb-4">Meeting Analysis by Time</h2>
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={formattedData}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="attended" stroke="#6366f1" strokeWidth={2} />
      <Line type="monotone" dataKey="notAttended" stroke="#4ade80" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
</div>
          {/* Calendar */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Your Calendar</h2>
            <div className="grid grid-cols-7 text-center text-sm gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="font-medium text-blue-500">{d}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg cursor-pointer transition ${
                    date.getDate() === i + 1 ? "bg-blue-200 font-semibold" : "hover:bg-blue-100"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Functional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Doubt Queue */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Live Doubt Queue</h2>
            <ul className="space-y-2 max-h-56 overflow-y-auto">
              {["Student A", "Student B", "Student C"].map((student, idx) => (
                <li key={idx} className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50">
                  <span>{student}</span>
                  <div className="space-x-2">
                    <button className="text-sm px-2 py-1 bg-blue-500 text-white rounded-lg">Reply</button>
                    <button className="text-sm px-2 py-1 bg-gray-200 text-gray-800 rounded-lg">Later</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Collection */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Recent Feedback</h2>
            <ul className="space-y-2 max-h-56 overflow-y-auto">
              {["Great session!", "Need more clarity on topic X", "Loved the examples!"].map((feedback, idx) => (
                <li key={idx} className="p-3 border rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span>{feedback}</span>
                    <FaStar className="text-yellow-500" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}