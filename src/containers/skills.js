import React, { useContext } from "react";
import Chart from "../components/chart";
import { createUseStyles } from "react-jss";
import { LanguageContext } from "../context/languageContext";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const useStyles = createUseStyles({
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 10rem",
      height: "90vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "4rem",
      marginTop: "2rem",
    },
    "@media (max-width: 880px)": {
      box: {
        padding: "0",
      },
    },
    "@media (max-width: 400px)": {
      heading: {
        fontSize: "2rem",
        marginTop: "1rem",
      },
      box: {
        padding: "0",
        position: "relative",
        right: "12px",
      },
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>
        {language === "sv" ? "KOMPETENS" : "SKILLS"}
      </h1>
      <Chart />
    </div>
  );
};

export default Skills;
