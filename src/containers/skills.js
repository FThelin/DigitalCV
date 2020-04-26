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
    },
    heading: {
      textAlign: "center",
      fontSize: "4rem",
      marginTop: "2rem",
    },
    "@media (max-width: 400px)": {
      heading: {
        fontSize: "2rem",
        marginTop: "1rem",
      },
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>
        {language === "sv" ? "FÄRDIGHETER" : "SKILLS"}
      </h1>
      <Chart />
    </div>
  );
};

export default Skills;
