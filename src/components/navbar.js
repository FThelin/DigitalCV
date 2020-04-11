import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";

const Navbar = () => {
  const { language } = useContext(LanguageContext);

  const useStyles = createUseStyles({
    ul: {
      display: "flex",
      listStyleType: "none",
      minWidth: "25rem",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "0.9rem",
      fontWeight: "600",
    },
    link: {
      color: "#FEFFFF",
      textDecoration: "none",
      "&:hover": {
        color: "#17252A",
      },
    },
  });

  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      <li>
        <Link className={classes.link} to="/about">
          {language === "sv" ? "OM MIG" : "ABOUT"}
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/portfolio">
          {language === "sv" ? "PORTFÖLJ" : "PORTFOLIO"}
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/skills">
          {language === "sv" ? "KOMPETENS" : "SKILLS"}
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/contact">
          {language === "sv" ? "KONTAKT" : "CONTACT"}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
