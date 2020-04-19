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
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1>SKILLS</h1>
      <Chart />
    </div>
  );
};

export default Skills;
