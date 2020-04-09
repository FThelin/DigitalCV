import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { LanguageContext } from "../context/languageContext";
import texts from "../languagesText";

const AboutText = (props) => {
  const { language } = useContext(LanguageContext);
  const milestones = [1982, 2001, 2005, 2007, 2019, 2020];
  const [milestoneIndex, setMilestoneIndex] = useState(5);

  const useStyles = createUseStyles({
    div: {
      gridArea: "text",
    },
    h1: {
      marginBottom: "1rem",
    },
    p: {
      marginBottom: "1rem",
    },
    i: {
      fontSize: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "between",
      width: "100%",
    },
    arrow: {
      "&:hover": {
        color: "#DEF2F1",
        cursor: "pointer",
      },
    },
    year: {
      marginLeft: "1rem",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  });

  const goBackwards = () => {
    if (milestoneIndex !== 0) {
      setMilestoneIndex(milestoneIndex - 1);
      props.changeYear(milestones[milestoneIndex - 1]);
    }
  };
  const goForwards = () => {
    if (milestoneIndex <= milestones.length - 1) {
      setMilestoneIndex(milestoneIndex + 1);
      props.changeYear(milestones[milestoneIndex + 1]);
    }
  };

  const changeText = () => {
    let textSV;
    let textEN;
    switch (props.year) {
      case 1982:
        textSV = texts[0].swedish.about1982;
        textEN = texts[1].english.about1982;
        break;
      case 2001:
        textSV = texts[0].swedish.about2001;
        textEN = texts[1].english.about2001;
        break;
      case 2005:
        textSV = texts[0].swedish.about2005;
        textEN = texts[1].english.about2005;
        break;
      case 2007:
        textSV = texts[0].swedish.about2007;
        textEN = texts[1].english.about2007;
        break;
      case 2019:
        textSV = texts[0].swedish.about2019;
        textEN = texts[1].english.about2019;
        break;
      default:
        textSV = texts[0].swedish.aboutText;
        textEN = texts[1].english.aboutText;
    }
    return language === "sv" ? textSV : textEN;
  };

  const changeHeading = () => {
    let heading;
    props.year === 2020
      ? (heading = language === "sv" ? "OM MIG" : "ABOUT ME")
      : (heading = props.year);

    return heading;
  };

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h1 className={classes.h1}>{changeHeading()}</h1>
      <p className={classes.p}>{changeText()}</p>
      <div className={classes.i}>
        {props.year !== 1982 && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              onClick={goBackwards}
              className={`fas fa-arrow-circle-left ${classes.arrow}`}
            ></i>
            <p className={classes.year}>{milestones[milestoneIndex - 1]}</p>
          </div>
        )}
        {props.year !== 2020 && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className={classes.year}>{milestones[milestoneIndex + 1]}</p>
            <i
              onClick={goForwards}
              className={`fas fa-arrow-circle-right ${classes.arrow}`}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutText;
