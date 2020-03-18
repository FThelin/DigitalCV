import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const useStyles = createUseStyles({
    ul: {
      display: "flex",
      listStyleType: "none",
      minWidth: "25rem",
      justifyContent: "space-around",
      alignItems: "center",
      fontSize: "0.9rem",
      fontWeight: "600"
    },
    link: {
      color: "#FEFFFF",
      textDecoration: "none",
      "&:hover": {
        color: "#17252A"
      }
    }
  });

  const classes = useStyles();

  return (
    <ul className={classes.ul}>
      <li>
        <Link className={classes.link} to="/about">
          ABOUT
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/portfolio">
          PORTFOLIO
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/skills">
          SKILLS
        </Link>
      </li>
      <li>
        <Link className={classes.link} to="/contact">
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
