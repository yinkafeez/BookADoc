import AppointmentLayout from "../features/appointment-booking/AppointmentLayout";
import Heading from "./Heading";
import "./AppLayout.css";
import SidebarLayout from "../features/sidebar/SidebarLayout";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Heading />
      <div className="app-layout__content">
        <AppointmentLayout />
        <SidebarLayout />
      </div>
    </div>
  );
}
