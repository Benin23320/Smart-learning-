import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
   FaChalkboardTeacher,
} from "react-icons/fa";
import {
  MdDashboard,
  MdBook,
  MdChat,
  MdAssessment,
  MdSettings,
  MdHelp,
} from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentDate = new Date().getDate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { label: "Dashboard", icon: <MdDashboard />, to: "/Dashboard" },
    { label: "Courses", icon: <MdBook />, to: "/courses" },
    { label: "Chats", icon: <MdChat />, to: "/chats" },
    { label: "Grades", icon: <MdAssessment />, to: "/grades" },
    { label: "Settings", icon: <MdSettings />, to: "/settings" },
    { label: "Help", icon: <MdHelp />, to: "/help" },
  ];

  // Data for charts
  const progressData = [
    { name: "Week 1", uv: 40 },
    { name: "Week 2", uv: 55 },
    { name: "Week 3", uv: 65 },
    { name: "Week 4", uv: 80 },
  ];

  const activityTimeData = [
    { name: "Video", value: 45 },
    { name: "Reading", value: 25 },
    { name: "Assignment", value: 20 },
    { name: "Live Class", value: 10 },
  ];

  const COLORS = ["#4F46E5", "#3B82F6", "#10B981", "#F59E0B"];

  const courses = [
    { id: 1, title: "JavaScript Fundamentals", progress: "75%", color: "bg-blue-100 text-blue-600" },
    { id: 2, title: "React Essentials", progress: "40%", color: "bg-purple-100 text-purple-600" },
    { id: 3, title: "CSS Advanced", progress: "90%", color: "bg-green-100 text-green-600" },
    { id: 4, title: "Node.js Basics", progress: "25%", color: "bg-red-100 text-red-600" },
    { id: 5, title: "UI/UX Design", progress: "60%", color: "bg-yellow-100 text-yellow-600" },
    { id: 6, title: "Python for AI", progress: "30%", color: "bg-indigo-100 text-indigo-600" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-indigo-900 to-indigo-800 text-white p-4 transition-all duration-300 shadow-xl rounded-r-3xl ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center mb-6">
          <FaUserCircle className="text-3xl text-white" />
          {sidebarOpen && (
            <div className="ml-3">
              <h2 className="text-base font-semibold">John Doe</h2>
              <p className="text-sm text-gray-300">Admin</p>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white mb-6 flex items-center justify-center hover:text-yellow-400 transition"
        >
          {sidebarOpen ? <FaAngleDoubleLeft size={22} /> : <FaAngleDoubleRight size={22} />}
        </button>

        {/* Navigation */}
        <nav className="space-y-4">
          {navItems.map(({ label, icon, to }) => (
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
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search for class, task, etc..."
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaBell className="text-xl text-gray-600 hover:text-blue-500 cursor-pointer" />
        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 flex justify-between items-center shadow-lg mb-6">
          <div>
            <h2 className="text-2xl font-bold">Welcome Back, John!</h2>
            <p className="text-sm mt-1">Continue your learning journey with ease.</p>
            <button className="mt-4 px-4 py-2 text-black bg-blue-100 hover:bg-blue-50 rounded-lg transition">
              Explore Courses
            </button>
          </div>
          <FaChalkboardTeacher className="text-6xl text-white mr-10" />
        </div>

        {/* Stats + Learning Progress Chart */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Stats */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: "92%", label: "Progress Score" },
                { value: "8", label: "Completed Courses" },
                { value: "16h", label: "Learning Hours" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white p-4 rounded-xl text-center shadow-md">
                  <h3 className="text-blue-600 text-2xl font-bold">{value}</h3>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              ))}
            </div>

            {/* Professional Bar Chart */}
            {/* Professional Bar Chart */}
<div className="bg-gradient-to-br from-white via-slate-50 to-white p-6 rounded-2xl shadow-lg border border-gray-200 h-64">
  <h2 className="text-xl font-semibold text-indigo-700 mb-4">Learning Progress</h2>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={progressData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis
        dataKey="name"
        tick={{ fontSize: 12, fill: "#4B5563" }}
        axisLine={false}
        tickLine={false}
        // Removed angle to keep labels straight
      />
      <YAxis
        domain={[0, 100]}
        tick={{ fontSize: 12, fill: "#4B5563" }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: 10,
          fontSize: 13,
        }}
        cursor={{ fill: "rgba(79, 70, 229, 0.1)" }}
      />
      <Bar dataKey="uv" radius={[6, 6, 0, 0]} barSize={32}>
        {progressData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill="#6366F1" />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>

          </div>

          {/* Today's Activity Chart */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Today's Activity Breakdown</h2>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {activityTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    formatter={(value) => <span className="text-xs">{value}</span>}
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* My Courses - Horizontal Scroll */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">My Courses</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-[220px] bg-white p-4 rounded-xl shadow-md flex-shrink-0"
              >
                <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center font-bold mb-3`}>
                  {course.title.charAt(0)}
                </div>
                <h3 className="font-medium text-gray-800">{course.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Progress: {course.progress}</p>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: course.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    currentDate === i + 1 ? "bg-blue-200 font-semibold" : "hover:bg-blue-100"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "View Profile", to: "/profile" },
                { label: "Contact Support", to: "/support" },
                { label: "FAQs", to: "/faq" },
                { label: "Account Settings", to: "/settings" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="bg-blue-50 text-blue-600 text-center py-2 rounded-lg hover:bg-blue-100 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}