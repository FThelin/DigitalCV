import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Project from "../components/project";
import AdamFredickImage from "../assets/adamfredick.png";
import MovieStarImage from "../assets/moviestar.png";
import RubikImage from "../assets/rubik.jpg";
import CiggenImage from "../assets/ciggen.JPG";
import FlutterImage from "../assets/flutter.png";
import { LanguageContext } from "../context/languageContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const useStyles = createUseStyles({
    box: {
      width: "75%",
      margin: "0 auto",
      height: "95vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "4rem",
    },
    text: {
      textAlign: "center",
      margin: "2rem 0",
    },
  });
  const classes = useStyles();

  return (
    <div id="portfolioContainer" className={classes.box}>
      <h1 className={classes.heading}>
        {language === "sv" ? "PORTFÖLJ" : "PORTFOLIO"}
      </h1>
      <p className={classes.text}>
        {language === "sv"
          ? "Några av mina projekt hittils. Alla byggt som skolprojekt i en del av min Front-End utbildning."
          : "Some of my projects so far. All as school projects as a part of my studying to become a Front-End developer."}
      </p>

      <Project
        img={AdamFredickImage}
        title="ADAM FREDICK"
        text={
          language === "sv"
            ? "Webshop med produkter, kundvagn, utcheckning och betalning. Kläder av den franska designern Adam Fredick."
            : "Webshop with products, cart, checkout and payment. Clothes by the french designer Adam Fredick."
        }
        repoLink="https://github.com/FThelin/WebShop"
        tools={<i className="fab fa-react"></i>}
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
        tools={<i className="fab fa-react"></i>}
      />

      <Project
        img={RubikImage}
        title="RUBIK`S CUBE ALGS"
        text={
          language === "sv"
            ? "Använde Node.js och Express.js för att skapa REST-API med CRUD funktionalitet samt ett UI för att kommunicera med servern. Applikationen hanterar algoritmer för sista lagret när man löser en Rubik´s kub"
            : "Used Node.js end Express.js to create a REST-API with CRUD functionality and an UI to communicate with the server. The application handles algorithms for last layer when solving a Rubik´s cube."
        }
        repoLink="https://github.com/FThelin/RubikAlgs"
        tools={
          <div>
            <i className="fab fa-react"></i>
            <i class="fab fa-node-js"></i>
          </div>
        }
      />

      <Project
        img={CiggenImage}
        title="CIGGEN"
        text={
          language === "sv"
            ? "Spel byggt med P5.js. Använd dina byggstenar för att få Jonathan att nå fram till sin kära cigarett. Ju snabbare desto bättre."
            : "Game built with P5.js. Use your building blocks to help Jonathan reach his precious cigarette as fast as possible."
        }
        repoLink="https://github.com/Stenis76/ModularMario"
        tools="P5.js"
      />

      <Project
        img={FlutterImage}
        title="WORLD TIME"
        text={
          language === "sv"
            ? "Mobilapp som visar aktuell tid i några av världens städer. Byggd med Flutter och World Time API."
            : "Mobile app that shows current time in some of the cities around the world. Built with Flutter and the World Time API"
        }
        repoLink="#"
        tools="Flutter"
      />
    </div>
  );
};

export default Portfolio;
