import "./Map.css";

import map from "../../img/map.png";
import Button from "../../ui/Button";
import { FaLocationCrosshairs } from "react-icons/fa6";
export default function Map() {
  return (
    <div className="map">
      <img src={map} alt="Map" className="map-img" />
      <Button className="more-info-button">
        <span>
          <FaLocationCrosshairs />
        </span>
        <span>View in a map</span>
      </Button>
    </div>
  );
}
