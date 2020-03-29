import React from "react";
import { createUseStyles } from "react-jss";

const AboutText = () => {
  const useStyles = createUseStyles({
    div: {
      gridArea: "text"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h1>Om mig</h1>
      <p>Bla bla...</p>
    </div>
  );
};

export default AboutText;
