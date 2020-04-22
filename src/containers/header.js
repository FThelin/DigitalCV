import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/navbar";
import Language from "../components/language";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import HamburgerMenu from "react-hamburger-menu";
import MobileNav from "../components/mobilenav";

const Header = () => {
  const { changeLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={headerStyles}>
      <div style={leftContainer}>
        <Link to="/" style={{ width: "4rem" }} id="logo">
          <img src={Logo} alt="logo" style={{ height: "100%" }} />
        </Link>
        <Navbar />
        <div className="hamburger">
          <HamburgerMenu
            isOpen={open}
            menuClicked={handleClick}
            width={24}
            height={24}
            strokeWidth={1}
            rotate={0}
            color={"#FEFFFF"}
            borderRadius={0}
            animationDuration={0.2}
          />
        </div>
      </div>
      <Language changeLanguage={changeLanguage} />
      {open && (
        <div className="mobile-menu">
          <MobileNav closeMenu={handleClick} />
        </div>
      )}
    </div>
  );
};

export default Header;

const headerStyles = {
  backgroundColor: "transparent",
  width: "100%",
  position: "relative",
  zIndex: 2,
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
};

const leftContainer = {
  display: "flex",
  height: "100%",
  width: "50%",
};
