import React from "react";
import Chart from "../components/chart";
import { createUseStyles } from "react-jss";

const Skills = () => {
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
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>SKILLS</h1>
      <Chart />
    </div>
  );
};

export default Skills;
