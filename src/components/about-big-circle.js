import React from "react";
import { createUseStyles } from "react-jss";
import Texts from "../languagesText";
import ProfilePicture from "../assets/profilepicture.JPG";

const AboutBigCircle = props => {
  const useStyles = createUseStyles({
    bigCircle: {
      height: "40rem",
      width: "40rem",
      backgroundColor: "#17252A",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "1rem"
    },
    img: {
      borderRadius: "50%"
    }
  });

  const classes = useStyles();
  const language = props.language;

  return (
    <div className={classes.bigCircle}>
      <div>
        <img
          src={ProfilePicture}
          alt="profile picture"
          className={classes.img}
        />
        <h2 style={{ color: "#FEFFFF", textAlign: "center" }}>
          {language === "sv"
            ? Texts[0].swedish.aboutHeading
            : Texts[1].english.aboutHeading}
        </h2>
        <hr />
      </div>
      <p style={{ color: "#FEFFFF", width: "25rem", textAlign: "center" }}>
        {language === "sv"
          ? Texts[0].swedish.aboutText
          : Texts[1].english.aboutText}
      </p>
    </div>
  );
};

export default AboutBigCircle;
