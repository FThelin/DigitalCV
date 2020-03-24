import React from "react";
import { createUseStyles } from "react-jss";
import AnimatedNumber from "animated-number-react";
import AboutBigCircle from "../components/about-big-circle";
import backgroundImage from "../assets/fippebg2.png";

const About = props => {
  const useStyles = createUseStyles({
    wrapper: {
      height: "100vh",
      backgroundColor: "#3aafa9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    aboutStyles: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      background: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      width: "100%",
      height: "100vh"
    }
  });

  const classes = useStyles();
  const formatValue = value => value.toFixed(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.aboutStyles}>
        {/* <AboutBigCircle language={props.language} />
        <AnimatedNumber value="1982" formatValue={formatValue} /> */}
      </div>
    </div>
  );
};

export default About;
