import { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

import "./BookedSchedule.css";

export default function BookedSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const handlePrevWeek = () => {
    setWeekStart(addDays(weekStart, -7));
  };

  const handleNextWeek = () => {
    setWeekStart(addDays(weekStart, 7));
  };

  return (
    <div className="calendar-container">
      {/* Header Navigation */}
      <div className="calendar-header">
        <button onClick={handlePrevWeek} className="nav-button">
          <FaCaretLeft size={24} />
        </button>
        <h2>{format(weekStart, "MMMM yyyy")}</h2>
        <button onClick={handleNextWeek} className="nav-button">
          <FaCaretRight size={24} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {[...Array(7)].map((_, i) => {
          const currentDate = addDays(weekStart, i);
          //   const dayName = format(currentDate, "EEEE");
          const isSelected =
            format(currentDate, "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd");

          return (
            <div key={i} className="day-column">
              <button
                className={`date-button ${isSelected ? "selected" : ""}`}
                onClick={() => setSelectedDate(currentDate)}
              >
                <span className="day-name">
                  {format(currentDate, "EEE").toUpperCase()}
                </span>
                <span className="day-number">{format(currentDate, "d")}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
