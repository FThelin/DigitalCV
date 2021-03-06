import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import backgroundImage from "../assets/mebg.png";
import AboutText from "../components/about-text";
import Quote from "../components/quote";
import Year from "../components/year";

const About = () => {
  const [year, setYear] = useState(2020);

  const changeYear = (newYear) => {
    setYear(newYear);
  };

  const useStyles = createUseStyles({
    wrapper: {
      height: "100vh",
      width: "100%",
      backgroundColor: "#3aafa9",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 0,
    },
    aboutStyles: {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gridTemplateRows: "repeat(4, 1fr)",
      gridTemplateAreas: `
          ". . . .  . . . ."
          ". text text . . q q ."
          ". text text . . q q."
          ". . . year year . . ."
        `,
      background: `url(${backgroundImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      width: "100%",
      height: "100vh",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Year year={year} />
      <div id="aboutStyles" className={classes.aboutStyles}>
        <AboutText changeYear={changeYear} year={year} />
        <Quote />
      </div>
    </div>
  );
};

export default About;
