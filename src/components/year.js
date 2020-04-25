import React from "react";
import AnimatedNumber from "animated-number-react";
import { createUseStyles } from "react-jss";

const Year = (props) => {
  const useStyles = createUseStyles({
    numberBox: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    number: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
      gridArea: "year",
      color: "#399c9a",
      fontSize: "35vw",
      transform: "scale(1, 2)",
      fontFamily: "'Sarpanch', sans-serif",
      overflow: "hidden",
    },
  });

  const formatValue = (value) => value.toFixed(0);
  const classes = useStyles();
  return (
    <div className={classes.numberBox}>
      <div className={classes.number}>
        <AnimatedNumber value={props.year} formatValue={formatValue} />
      </div>
    </div>
  );
};

export default Year;
