import "./Footer.css";
import logo from "../../img/logo.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo-container">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2 className="footer-title">BookADoc</h2>
          </div>
          <p className="footer-description">
            BookADoc is a patient facing web / mobile application where patients
            can search and discover providers by illness, specialist or name of
            the provider.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Service for Patient</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Doctor Search</li>
            <li className="footer-list-item">Appointment Booking</li>
            <li className="footer-list-item">Patient Reviews</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Service for Doctor</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Profile Listing</li>
            <li className="footer-list-item">Appointment Management</li>
            <li className="footer-list-item">Patient Feedback</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li className="footer-list-item">1-888-123-4567</li>
            <li className="footer-list-item">help@bookadoc.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-large-description">
        BookADoc is a patient facing web / mobile application where patients can
        search and discover providers by illness, specialist or name of the
        provider. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        sed neque vitae nisl condimentum feugiat vitae et libero. Phasellus
        volutpat sapien aliquam mauris volutpat imperdiet Aenean eu elementum
        sem. Nullam convallis fermentum mauris, id luctus neque porta pulvinar.
      </p>
    </footer>
  );
}
