import { useState } from "react";
import { format } from "date-fns";

import "./Form.css";

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2025, i), "MMMM yyyy")
  );

  return (
    <>
      <select
        id="date-select"
        value={selectedDate}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">--Please choose an option--</option>
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </>
  );
}
