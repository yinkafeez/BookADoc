import { useEffect, useState } from "react";
import SearchInput from "../../ui/SearchInput";
import "./Header.css";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // handle toggle function on button click
  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }

  // function that will resize the nav on every size
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className="header">
      {/* <span className="search-input"> */}
      <SearchInput />
      {/* </span> */}

      {(toggleMenu || screenWidth > 576) && <Navbar />}

      <button onClick={handleToggle} className="btn">
        {toggleMenu ? (
          <IoMdClose style={{ color: "#000", width: "30px", height: "30px" }} />
        ) : (
          <GiHamburgerMenu
            style={{ color: "#000", width: "30px", height: "30px" }}
          />
        )}
      </button>
    </header>
  );
}
