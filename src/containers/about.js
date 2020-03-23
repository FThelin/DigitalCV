import React from "react";
import { createUseStyles } from "react-jss";
//import AnimatedNumber from "animated-number-react";
import AboutBigCircle from "../components/about-big-circle";

const About = props => {
  const useStyles = createUseStyles({
    aboutStyles: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3aafa9"
    }
  });

  const classes = useStyles();
  //const formatValue = value => value.toFixed(0);

  return (
    <div className={classes.aboutStyles}>
      <AboutBigCircle language={props.language} />

      {/* <AnimatedNumber value="1982" formatValue={formatValue} /> */}
    </div>
  );
};

export default About;
