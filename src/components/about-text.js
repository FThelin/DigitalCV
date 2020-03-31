import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { LanguageContext } from "../context/languageContext";
import texts from "../languagesText";

const AboutText = () => {
  const { language } = useContext(LanguageContext);

  const useStyles = createUseStyles({
    div: {
      gridArea: "text"
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <h1>
        {language === "sv"
          ? texts[0].swedish.aboutHeading
          : texts[1].english.aboutHeading}
      </h1>
      <p>
        {language === "sv"
          ? texts[0].swedish.aboutText
          : texts[1].english.aboutText}
      </p>
    </div>
  );
};

export default AboutText;
