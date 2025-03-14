import { useState } from "react";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { MdFavorite, MdFavoriteBorder, MdOutlineInfo } from "react-icons/md";

import { PiNoteFill } from "react-icons/pi";
import PropTypes from "prop-types";

import insurance from "../../img/insurance.png";
import Button from "../../ui/Button";
import "./AppointmentItem.css";
import Schedule from "../../ui/Schedule";
import BookedSchedule from "../../ui/BookedSchedule";

export default function AppointmentItem({ doctorInfo }) {
  const {
    doctorImage,
    doctorName,
    doctorPosition,
    doctorAddress,
    starRating,
    numberOfViews,
    isBooked,
    setBooking,
    // setBooked,
    setBookAgain,
  } = doctorInfo;

  const [isFav, setIsFav] = useState(false);

  function handleFavClick() {
    setIsFav((fav) => !fav);
  }

  function handleBookings() {
    if (setBooking) setBooking(1);
  }
  function handleBookAgain() {
    if (setBookAgain) setBookAgain(0);
  }

  return (
    <div className="appointment-item">
      <div className="notification">
        {isBooked === 1 ? (
          <p className="booked">
            <span>
              <MdOutlineInfo />
            </span>
            You booked this provider in the past
          </p>
        ) : isBooked === 2 ? (
          <p className="not-booked">
            <span>
              <MdOutlineInfo />
            </span>
            Lorem ipsum dolor sit amet cosecteuer. View details
          </p>
        ) : null}
      </div>
      <div className="doctor-info">
        <div className="image-container">
          <img src={doctorImage} alt="Doctor" className="doctor-image" />
          <div className="favorite-icon" onClick={handleFavClick}>
            {isFav ? <MdFavorite color="#FD1774" /> : <MdFavoriteBorder />}
          </div>
        </div>
        <div className="details">
          <h2>{doctorName}</h2>
          <p>{doctorPosition}</p>
          <p>
            <span className="location-icon">
              <FaLocationDot />
            </span>
            {doctorAddress}
          </p>
          <div className="rating-views">
            <span className="star-rating">
              <span className="star">
                <FaStar />
              </span>
              {starRating}.00
            </span>
            <span className="views">({numberOfViews} reviews)</span>
          </div>
          <div className="insurance">
            <span>
              <img src={insurance} alt="insurance" />
            </span>
            <p>Dyson, and 2+ more insurance accepted</p>
          </div>
        </div>
        <div className="actions">
          <Button className="more-info-button">
            <span color="info-icon">
              <MdOutlineInfo height={30} width={40} />
            </span>
            <span>More Info</span>
          </Button>
          {isBooked === 2 && (
            <Button className="book-again-button" onClick={handleBookAgain}>
              <span>
                <PiNoteFill />
              </span>
              <span>Book Again</span>
            </Button>
          )}
          {isBooked === 0 && (
            <Button className="book-again-button" onClick={handleBookings}>
              <span>
                <PiNoteFill />
              </span>
              <span>Book Appointment</span>
            </Button>
          )}
        </div>
      </div>
      <div className="schedule">
        {isBooked === 0 && <Schedule />}
        {isBooked === 1 && <BookedSchedule />}
      </div>
    </div>
  );
}

AppointmentItem.propTypes = {
  doctorInfo: PropTypes.shape({
    doctorImage: PropTypes.string.isRequired,
    doctorName: PropTypes.string.isRequired,
    doctorPosition: PropTypes.string.isRequired,
    doctorAddress: PropTypes.string.isRequired,
    starRating: PropTypes.number.isRequired,
    numberOfViews: PropTypes.number.isRequired,
    isBooked: PropTypes.oneOf([0, 1, 2]).isRequired,
    setBooking: PropTypes.func,
    setBooked: PropTypes.func,
    setBookAgain: PropTypes.func,
  }).isRequired,
};
