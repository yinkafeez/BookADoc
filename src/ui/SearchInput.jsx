import React from "react";
import "./searchInput.css";
import { IoSearch } from "react-icons/io5";
function SearchInput() {
  const [value, setValue] = React.useState({
    diseaseName: "",
    id: "",
    category: "",
  });

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const { diseaseName, id, category } = value;
  return (
    <div className="search-container">
      <input
        type="text"
        id="diseaseName"
        value={diseaseName}
        onChange={(e) => onChange({ ...value, diseaseName: e.target.value })}
        placeholder="Migraine"
        className="search-input"
      />

      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => onChange({ ...value, id: e.target.value })}
        placeholder="456789"
        className="search-input"
      />

      <select
        value={category}
        onChange={(e) => onChange({ ...value, category: e.target.value })}
        className="search-input"
      >
        <option className="option">Agile Health Insurance</option>
        <option className="option">Fagule Health Insurance</option>
        <option className="option"> Gasun Health Insurance</option>
        <option className="option">Mason Health Insurance</option>
        {/* Add more months as needed */}
      </select>

      <button className="search-button">
        <IoSearch className="search-icon" />
      </button>
    </div>
  );
}

export default SearchInput;
