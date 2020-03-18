import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const Language = props => {
  const useStyles = createUseStyles({
    p: {
      color: "#2B7A78",
      fontSize: "0.7rem",
      fontWeight: "600"
    },
    icon: {
      margin: {
        top: 0,
        right: 10,
        bottom: 0,
        left: 10
      },
      fontSize: "1.2rem",
      "&:hover": {
        color: "#FEFFFF",
        cursor: "pointer"
      }
    },
    active: {
      color: "#FEFFFF"
    }
  });

  const classes = useStyles();
  const [swedishhActive, setSwedishActive] = useState(classes.active);
  const [englishActive, setEnglishActive] = useState(null);

  const handleLanguage = () => {
    swedishhActive === null
      ? setSwedishActive(classes.active)
      : setSwedishActive(null);
    englishActive === null
      ? setEnglishActive(classes.active)
      : setEnglishActive(null);
    props.changeLanguage();
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p className={`${classes.p} ${swedishhActive}`}>SVENSKA</p>
      <i
        className={`fas fa-exchange-alt ${classes.icon}`}
        onClick={handleLanguage}
      ></i>
      <p className={`${classes.p} ${englishActive}`}>ENGLISH</p>
    </div>
  );
};

export default Language;
