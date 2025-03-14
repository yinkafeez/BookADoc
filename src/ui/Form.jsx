import { useState } from "react";

import "./Form.css";
import DateSelector from "./DateSelector";
import MultiSelectInput from "./MultiSelectInput";

function Form() {
  const [selectedReason, setSelectedReason] = useState(["Anxiety"]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(["Addicted"]);
  const [selectedLanguage, setSelectedLanguage] = useState(["English"]);
  const [rating, setRating] = useState(0);

  const [ReasonInputValue, setReasonInputValue] = useState("");
  const [SpecialityInputValue, setSpecialityInputValue] = useState("");
  const [LanguageInputValue, setLanguageInputValue] = useState("");

  const handleIncrement = () => setRating(rating + 1);
  const handleDecrement = () => setRating(rating - 1);

  return (
    <form className="form">
      <div className="filter">
        <p className="filter-name">All Filter</p>
        <p className="filter-action">Clear All Filter</p>
      </div>

      <div className="form-group">
        <label className="form-label">Select Month</label>
        <DateSelector />
      </div>

      <div className="form-group">
        <label className="form-label">Visit Type</label>
        <select className="form-select">
          <option>In Person</option>
          <option>Virtual</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Preferred Time</label>
        <div className="form-checkbox-group">
          <div>
            <input type="checkbox" className="form-checkbox" /> Early Morning
            (Before 9am)
          </div>
          <div>
            <input type="checkbox" className="form-checkbox" /> Morning (9am -
            noon)
          </div>
          <div>
            <input type="checkbox" className="form-checkbox" /> Afternoon (Noon
            - 4pm)
          </div>
          <div>
            <input type="checkbox" className="form-checkbox" /> Evening (After
            4pm)
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Provider Gender</label>
        <div className="form-radio-group">
          <div>
            <input type="radio" name="gender" className="form-radio" /> Male
          </div>
          <div>
            <input type="radio" name="gender" className="form-radio" /> Female
          </div>
          <div>
            <input type="radio" name="gender" className="form-radio" /> Other
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Visit Reason</label>
        <MultiSelectInput
          selectedItems={selectedReason}
          setSelectedItems={setSelectedReason}
          inputValue={ReasonInputValue}
          setInputValue={setReasonInputValue}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Speciality</label>
        <MultiSelectInput
          selectedItems={selectedSpeciality}
          setSelectedItems={setSelectedSpeciality}
          inputValue={SpecialityInputValue}
          setInputValue={setSpecialityInputValue}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Rating/Review</label>
        <div className="form-rating">
          <button
            type="button"
            className="rating-button"
            onClick={handleDecrement}
            disabled={rating === 0}
          >
            -
          </button>
          <input
            type="range"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="form-range"
          />

          <button
            type="button"
            className="rating-button"
            onClick={handleIncrement}
            disabled={rating === 10}
          >
            +
          </button>
          <button className="rating-value" disabled={true}>
            {rating}
          </button>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Language Spoken</label>
        <MultiSelectInput
          selectedItems={selectedLanguage}
          setSelectedItems={setSelectedLanguage}
          inputValue={LanguageInputValue}
          setInputValue={setLanguageInputValue}
        />
      </div>
    </form>
  );
}

export default Form;
