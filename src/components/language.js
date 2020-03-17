import React from "react";
import { createUseStyles } from "react-jss";

const Language = props => {
  const useStyles = createUseStyles({
    p: {
      color: "#FEFFFF",
      fontSize: "0.9rem",
      fontWeight: "600",
      "&:hover": {
        color: "#17252A",
        cursor: "pointer"
      }
    },
    icon: {
      margin: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      }
    }
  });

  const classes = useStyles();

  return (
    <div style={{ display: "flex" }}>
      <p className={classes.p} style={{ textDecoration: "underline" }}>
        SVENSKA
      </p>
      <i
        className={`fas fa-exchange-alt ${classes.icon}`}
        onClick={props.changeLanguage}
      ></i>
      <p className={classes.p}>ENGLISH</p>
    </div>
  );
};

export default Language;
