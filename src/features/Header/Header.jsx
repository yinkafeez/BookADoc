import SearchInput from "../../ui/SearchInput";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <SearchInput />
      <Navbar />
    </header>
  );
}
