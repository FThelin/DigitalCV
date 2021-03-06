import React, { useContext } from "react";
import ContactWay from "../components/contactway";
import { createUseStyles } from "react-jss";
import { LanguageContext } from "../context/languageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const useStyles = createUseStyles({
    box: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    heading: {
      textAlign: "center",
      fontSize: "4rem",
      margin: "2rem 0",
    },
    "@media (max-width: 400px)": {
      heading: {
        fontSize: "2rem",
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>
        {language === "sv" ? "KONTAKT" : "CONTACT"}
      </h1>
      <ContactWay
        icon={<i className="fas fa-envelope"></i>}
        path="mailto:fredrikthelin82@gmail.com"
        text="fredrikthelin82@gmail.com"
      />
      <ContactWay
        icon={<i className="fab fa-github"></i>}
        path="https://github.com/FThelin"
        text="Github"
      />
      <ContactWay
        icon={<i className="fab fa-linkedin"></i>}
        path="https://www.linkedin.com/in/fredrik-thelin-66bbb1171/"
        text="LinkedIn"
      />
    </div>
  );
};

export default Contact;
