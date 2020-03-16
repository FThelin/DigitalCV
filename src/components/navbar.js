import React, { useEffect } from "react";

const Navbar = () => {
  const mouseover = () => {
    const li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener("mouseover", e => {
        e.target.style.color = "#17252A";
        e.target.style.cursor = "pointer";
      });
    }
  };

  const mouseout = () => {
    const li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener("mouseout", e => {
        e.target.style.color = "#FEFFFF";
        e.target.style.cursor = "pointer";
      });
    }
  };

  useEffect(() => {
    mouseover();
    mouseout();
    return () => {
      mouseover();
      mouseout();
    };
  });

  return (
    <ul style={ulStyles}>
      <li>ABOUT</li>
      <li>PORTFOOLIO</li>
      <li>SKILLS</li>
      <li>CONTACT</li>
    </ul>
  );
};

export default Navbar;

const ulStyles = {
  display: "flex",
  listStyleType: "none",
  width: "50%",
  justifyContent: "space-around",
  alignItems: "center",
  color: "#FEFFFF",
  fontSize: "0.9rem",
  fontWeight: "600"
};
