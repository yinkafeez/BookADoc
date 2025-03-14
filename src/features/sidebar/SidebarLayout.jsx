import Map from "./Map";
import Form from "../../ui/Form";

import "./SidebarLayout.css";
export default function SidebarLayout() {
  return (
    <div className="sidebar-layout">
      <Map />
      <Form />
    </div>
  );
}
