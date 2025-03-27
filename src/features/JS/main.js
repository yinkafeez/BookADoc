const hamburger = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar");

// Ensure nav items are hidden initially on small screens
if (window.innerWidth <= 576) {
  navbarItems.classList.remove("open");
}

// navbar toggle
hamburger.addEventListener("click", () => {
  navbarItems.classList.toggle("open");
  // Toggle hamburger button text
  if (navbarItems.classList.contains("open")) {
    hamburger.textContent = "✖"; // Close button
    navbarItems.style.display = "block"; // Ensure nav items are displayed
  } else {
    hamburger.textContent = "☰"; // Menu button
    navbarItems.style.display = "none"; // Hide nav items
  }
});

// handling favorite btn
const favoriteBtns = document.querySelectorAll(".favorite-icon");

favoriteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("favorited");
    // Optionally, you can change the color directly using inline styles
    if (btn.classList.contains("favorited")) {
      btn.style.color = "#fd1774"; // Change to your desired color
    } else {
      btn.style.color = ""; // Reset to default
    }
  });
});

// handling multiselect input
const multiSelectInput = document.querySelector(".multi-select-input");
const tagsContainer = document.querySelector(".multi-select-tags");

document.querySelectorAll(".multi-select-input").forEach((input) => {
  const tagsContainer = input.previousElementSibling;
  input.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" && input.value.trim() !== "") ||
      (event.type === "blur" && input.value.trim() !== "")
    ) {
      event.preventDefault();

      // Create a new tag element
      const tag = document.createElement("main");
      tag.classList.add("tag");
      tag.textContent = input.value.trim();

      // Create a close button for the tag
      const closeBtn = document.createElement("btn");
      closeBtn.classList.add("multi-select-remove-icon");
      closeBtn.textContent = "✖";

      // Add event listener to remove the tag when close button is clicked
      closeBtn.addEventListener("click", () => {
        tagsContainer.removeChild(tag);
      });

      // Append the close button to the tag
      tag.appendChild(closeBtn);

      // Append the tag to the tags container
      tagsContainer.appendChild(tag);

      // Clear the input field
      input.value = "";
    }
  });
});

// RATING FUNCTION
const rangeInput = document.querySelector(".form-range");
const incBtn = document.querySelector(".rating-inc");
const decBtn = document.querySelector(".rating-dec");
const displayBtn = document.querySelector(".rating-value");

// Update the display button with the current range value
const updateDisplay = () => {
  displayBtn.textContent = rangeInput.value;
};

// Increase the range value on increment button click
incBtn.addEventListener("click", () => {
  if (rangeInput.value < rangeInput.max) {
    rangeInput.value = parseInt(rangeInput.value) + 1;
    updateDisplay();
    // Disable only if value reaches max
    incBtn.disabled = rangeInput.value === rangeInput.max;
  }
});

// Decrease the range value on decrement button click
decBtn.addEventListener("click", () => {
  if (rangeInput.value > rangeInput.min) {
    rangeInput.value = parseInt(rangeInput.value) - 1;
    updateDisplay();
    // Disable only if value reaches min
    decBtn.disabled = rangeInput.value === rangeInput.min;
  }
});

// Update the display button when the range input value changes
rangeInput.addEventListener("input", updateDisplay);

// Initialize the display button with the initial range value
updateDisplay();
