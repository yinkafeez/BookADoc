import "./Button.css";
import PropTypes from "prop-types";
export default function Button({ children, className, onClick }) {
  return (
    <button
      className={
        className === "more-info-button"
          ? "more-info-button"
          : className === "book-again-button"
          ? "book-again-button"
          : "button"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
