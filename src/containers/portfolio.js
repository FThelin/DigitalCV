import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Project from "../components/project";
import AdamFredickImage from "../assets/adamfredick.png";
import MovieStarImage from "../assets/moviestar.png";
import { LanguageContext } from "../context/languageContext";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const useStyles = createUseStyles({
    box: {
      width: "70%",
      margin: "0 auto",
      display: "grid",
      gridGap: "3rem",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "5% 5% 45% 45%",
      gridTemplateAreas: '"h h" "t t" "c c" "c c"',
    },
    heading: {
      gridArea: "h",
      textAlign: "center",
      //fontFamily: "'Mansalva', cursive",
      fontSize: "5rem",
    },
    text: {
      gridArea: "t",
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>PORTFOLIO</h1>
      <p className={classes.text}>Some text</p>
      <Project
        img={AdamFredickImage}
        title="ADAM FREDICK"
        text={
          language === "sv"
            ? "Webshop med produkter, kundvagn, utcheckning och betalning. Kläder av den franska designern Adam Fredick."
            : "Webshop with products, cart, checkout and payment. Clothes by the french designer Adam Fredick"
        }
        repoLink="https://github.com/FThelin/WebShop"
        siteLink="https://epic-varahamihira-8e19d0.netlify.com/"
        tools="React/Grommet"
      />
      <Project
        img={MovieStarImage}
        title="MOVIESTAR"
        text={
          language === "sv"
            ? "Filmapp där man kan söka efter filmer i olika kategorier. Använt The Movie Database API."
            : "Movie app where you can search for movies in different categories. Used The Movie Database API"
        }
        repoLink="https://github.com/Stenis76/moviesearch"
        siteLink="#"
        tools="React"
      />
      <Project
        img={AdamFredickImage}
        title="ADAM FREDICK"
        text={
          language === "sv"
            ? "Webshop med produkter, kundvagn, utcheckning och betalning. Kläder av den franska designern Adam Fredick."
            : "Webshop with products, cart, checkout and payment. Clothes by the french designer Adam Fredick"
        }
        repoLink="https://github.com/FThelin/WebShop"
        siteLink="https://epic-varahamihira-8e19d0.netlify.com/"
        tools="React/Grommet"
      />
      <Project
        img={AdamFredickImage}
        title="ADAM FREDICK"
        text={
          language === "sv"
            ? "Webshop med produkter, kundvagn, utcheckning och betalning. Kläder av den franska designern Adam Fredick."
            : "Webshop with products, cart, checkout and payment. Clothes by the french designer Adam Fredick"
        }
        repoLink="https://github.com/FThelin/WebShop"
        siteLink="https://epic-varahamihira-8e19d0.netlify.com/"
        tools="React/Grommet"
      />
    </div>
  );
};

export default Portfolio;
