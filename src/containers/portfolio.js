import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import Project from "../components/project";
import AdamFredickImage from "../assets/adamfredick.png";
import MovieStarImage from "../assets/moviestar.png";
import RubikImage from "../assets/rubik.jpg";
import { LanguageContext } from "../context/languageContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const useStyles = createUseStyles({
    box: {
      width: "75%",
      margin: "0 auto",
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
    <div className={classes.box}>
      <h1 className={classes.heading}>PORTFOLIO</h1>
      <p className={classes.text}>Some text</p>
      <Carousel showArrows={true} showThumbs={true}>
        <div>
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
            tools={<i className="fab fa-react"></i>}
          />
        </div>
        <div>
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
            tools={<i className="fab fa-react"></i>}
          />
        </div>
        <div>
          <Project
            img={RubikImage}
            title="RUBIK`S CUBE ALGS"
            text={
              language === "sv"
                ? "Använde Node.js och Express.js för att skapa REST-API med CRUD funktionalitet samt ett UI för att kommunicera med servern. Applikationen hanterar algoritmer för sista lagret när man löser en Rubik´s kub"
                : "Used Node.js end Express.js to create a REST-API with CRUD functionality and an UI to communicate with the server. The application handles algorithms for last layer when solving a Rubik´s cube."
            }
            repoLink="https://github.com/FThelin/RubikAlgs"
            siteLink="#"
            tools={
              <div>
                <i className="fab fa-react"></i>
                <i class="fab fa-node-js"></i>
              </div>
            }
          />
        </div>
        <div>
          <Project
            img={AdamFredickImage}
            title="RUBIK`S CUBE ALGS"
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
        <div>
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
      </Carousel>
      {/* <Project
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
      /> */}
    </div>
  );
};

export default Portfolio;
