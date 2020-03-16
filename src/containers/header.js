import React from "react";
import Logo from "../assets/logo.png";
import Navbar from "../components/navbar";
import Language from "../components/language";

const Header = () => {
  return (
    <div style={headerStyles}>
      <img src={Logo} alt="logo" style={{ height: "100%" }} />
      <Navbar />
      <Language />
    </div>
  );
};

export default Header;

const headerStyles = {
  width: "100%",
  position: "fixed",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem"
};
