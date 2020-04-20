import React from "react";
import { createUseStyles } from "react-jss";

const ContactWay = (props) => {
  const useStyles = createUseStyles({
    box: {
      backgroundColor: "#17252A",
      width: "25rem",
      height: "8rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderRadius: "15px",
      boxShadow: "2px 2px 4px #17252A",
      marginTop: "3rem",
    },
    icon: {
      color: "#3aafa9",
      fontSize: "4rem",
    },
    link: {
      color: "#DEF2F1",
      letterSpacing: "2px",
      fontSize: "1.2rem",
      textDecoration: "none",
      "&:hover": {
        color: "gray",
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <div className={classes.icon}>{props.icon}</div>
      <a target="_blank" className={classes.link} href={props.path}>
        {props.text}
      </a>
    </div>
  );
};

export default ContactWay;
