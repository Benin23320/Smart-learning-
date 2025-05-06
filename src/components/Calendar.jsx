// src/components/Calendar.jsx
import React, { useState } from 'react';
import moment from 'moment'; // Use Moment.js for date manipulation

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const today = moment(); // Today's date

  // Function to navigate to the previous month
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  // Function to navigate to the next month
  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  // Get the first day of the current month
  const firstDayOfMonth = currentDate.clone().startOf('month');

  // Get the last day of the current month
  const lastDayOfMonth = currentDate.clone().endOf('month');

  // Generate weekdays (Sun, Mon, Tue, etc.)
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate dates for the current month
  const daysInMonth = [];
  let day = firstDayOfMonth.clone().startOf('week'); // Start from the first weekday of the month

  while (day.isSameOrBefore(lastDayOfMonth, 'date') || day.weekday() !== 0) {
    daysInMonth.push(day.clone());
    day.add(1, 'day');
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-blue-600 hover:text-blue-800"
        >
        </button>
        <h2 className="text-xl font-bold text-blue-600">
          {currentDate.format('MMMM YYYY')}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-blue-600 hover:text-blue-800"
        >
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {weekdays.map((day) => (
          <div key={day} className="font-semibold text-blue-600">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm mt-2">
        {daysInMonth.map((day, index) => {
          const isToday = day.isSame(today, 'day');
          const isCurrentMonth = day.isSame(currentDate, 'month');
          const isInactive = !isCurrentMonth;

          return (
            <div
              key={index}
              className={`p-2 rounded-lg cursor-pointer transition ${
                isToday ? 'bg-blue-200' : isInactive ? 'text-gray-400' : 'hover:bg-blue-100'
              }`}
            >
              {day.date()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;