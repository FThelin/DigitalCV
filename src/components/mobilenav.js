import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";

const MobileNav = (props) => {
  const { language } = useContext(LanguageContext);

  const useStyles = createUseStyles({
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyleType: "none",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "1.3rem",
      fontWeight: "600",
      height: "50%",
    },
    link: {
      color: "#3aafa9",
      marginTop: "2rem",
      textDecoration: "none",
      "&:hover": {
        color: "#2B7A78",
      },
    },
  });

  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      <li>
        <Link className={classes.link} to="/about" onClick={props.closeMenu}>
          {language === "sv" ? "OM MIG" : "ABOUT"}
        </Link>
      </li>
      <li>
        <Link
          className={classes.link}
          to="/portfolio"
          onClick={props.closeMenu}
        >
          {language === "sv" ? "PORTFÖLJ" : "PORTFOLIO"}
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/skills" onClick={props.closeMenu}>
          {language === "sv" ? "KOMPETENS" : "SKILLS"}
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/contact" onClick={props.closeMenu}>
          {language === "sv" ? "KONTAKT" : "CONTACT"}
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
