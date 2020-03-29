import React from "react";
import AnimatedNumber from "animated-number-react";
import { createUseStyles } from "react-jss";

const Year = () => {
  const useStyles = createUseStyles({
    number: {
      gridArea: "year",
      color: "#2B7A78",
      textAlign: "center",
      fontSize: "30rem",
      marginTop: "3rem",
      fontFamily: "'Sarpanch', sans-serif"
    }
  });

  const formatValue = value => value.toFixed(0);
  const classes = useStyles();
  return (
    <div className={classes.number}>
      <AnimatedNumber value="2020" formatValue={formatValue} />
    </div>
  );
};

export default Year;
