import AppointmentItem from "./AppointmentItem";
import "./AppointmentList.css";
import doc1 from "../../img/doc1.jpg";
import doc2 from "../../img/doc2.jpg";
import doc3 from "../../img/doc3.jpg";
import doc4 from "../../img/doc4.jpg";
import { useState } from "react";

export default function AppointmentList() {
  const [booking, setBooking] = useState(0);
  const [booked, setBooked] = useState(1);
  const [bookAgain, setBookAgain] = useState(2);
  return (
    <div className="appointment-list">
      <AppointmentItem
        doctorInfo={{
          doctorImage: doc1,
          doctorName: "Katherine Carroll, DO",
          doctorPosition: "Primary Care Doctor",
          doctorAddress: "52087 Toney Neck Suite 296",
          starRating: 5,
          numberOfViews: 99,
          isBooked: bookAgain,
          setBookAgain,
        }}
      />
      <AppointmentItem
        doctorInfo={{
          doctorImage: doc4,
          doctorName: "Steven Weiner, MD ",
          doctorPosition: "Primary Care Doctor",
          doctorAddress: "52087 Toney Neck Suite 296",
          starRating: 5,
          numberOfViews: 100,
          isBooked: booked,
          setBooked,
        }}
      />
      <AppointmentItem
        doctorInfo={{
          doctorImage: doc3,
          doctorName: "Dr. Anesa Dahly",
          doctorPosition: "Primary Care Doctor",
          doctorAddress: "52087 Toney Neck Suite 296",
          starRating: 5,
          numberOfViews: 100,
          isBooked: booking,
          setBooking,
        }}
      />
      <AppointmentItem
        doctorInfo={{
          doctorImage: doc2,
          doctorName: "Olivia Rhye",
          doctorPosition: "Primary Care Doctor",
          doctorAddress: "52087 Toney Neck Suite 296",
          starRating: 5,
          numberOfViews: 99,
          isBooked: booked,
        }}
      />
    </div>
  );
}
