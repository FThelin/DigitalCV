import React from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/navbar";
import Language from "../components/language";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div style={headerStyles}>
      <div style={leftContainer}>
        <Link to="/" style={{ width: "4rem" }}>
          <img src={Logo} alt="logo" style={{ height: "100%" }} />
        </Link>

        <Navbar />
      </div>
      <Language changeLanguage={props.changeLanguage} />
    </div>
  );
};

export default Header;

const headerStyles = {
  width: "100%",
  position: "relative",
  zIndex: 2,
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem"
};

const leftContainer = {
  display: "flex",
  height: "100%",
  width: "50%"
};
