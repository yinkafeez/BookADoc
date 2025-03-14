import { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";

import "./Schedule.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const timeSlots = {
    Monday: ["8:00 AM"],
    Tuesday: ["8:00 AM", "8:20 AM", "9:00 AM"],
    Wednesday: ["8:00 AM", "8:20 AM", "9:00 AM"],
    Thursday: ["—", "8:20 AM", "9:00 AM"],
    Friday: ["8:00 AM", "—", "9:00 AM"],
    Saturday: [],
    Sunday: [],
  };

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
          const dayName = format(currentDate, "EEEE");
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

              {/* Time Slots */}
              <div className="time-slots">
                {timeSlots[dayName]?.length > 0 ? (
                  timeSlots[dayName].map((slot, index) => (
                    <div
                      key={index}
                      className={`time-slot ${slot === "—" ? "disabled" : ""}`}
                    >
                      {slot}
                    </div>
                  ))
                ) : (
                  <div className="no-slot">—</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
