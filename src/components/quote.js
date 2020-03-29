import React from "react";
import { createUseStyles } from "react-jss";

const Quote = () => {
  const useStyles = createUseStyles({
    quoteStyles: {
      gridArea: "q",
      fontSize: "1.3rem",
      fontWeight: "bold",
      marginLeft: "3rem",
      fontStyle: "italic",
      color: "#DEF2F1"
    }
  });

  const classes = useStyles();
  return (
    <p className={classes.quoteStyles}>
      "No problem can withstand the assault of sustained thinking."
      <br /> — Voltaire
    </p>
  );
};

export default Quote;
