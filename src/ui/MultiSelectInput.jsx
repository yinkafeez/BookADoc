// import { useState } from "react";
// import { X } from "lucide-react";

import "./MultiSelectInput.css";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

function MultiSelectInput({
  selectedItems,
  setSelectedItems,
  inputValue,
  setInputValue,
}) {
  function handleKeyDown(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setSelectedItems([...selectedItems, inputValue.trim()]);
      setInputValue("");
    }
  }

  function removeTag(tag) {
    setSelectedItems(selectedItems.filter((item) => item !== tag));
  }

  return (
    <div className="multi-select-input-container">
      {/* Tags */}
      <div className="multi-select-tags">
        {selectedItems.map((tag, index) => (
          <div key={index} className="multi-select-tag">
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="multi-select-remove-button"
            >
              <IoCloseSharp size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="multi-select-input"
        placeholder="Add a tag..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Dropdown Icon */}
      <span className="multi-select-dropdown-icon">▼</span>
    </div>
  );
}
MultiSelectInput.propTypes = {
  selectedItems: PropTypes.array.isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default MultiSelectInput;
