import React from "react";
import { createUseStyles } from "react-jss";

const Project = (props) => {
  const useStyles = createUseStyles({
    card: {
      display: "grid",
      gridTemplateColumns: "70% 30%",
      gridTemplateRows: "repeat(6, 1fr)",
      gridTemplateAreas: '"i t" "i o" "i x" "i x" "i x" "l l"',
      width: "100%",
      background: "#17252A",
      color: "#DEF2F1",
    },
    img: {
      gridArea: "i",
      width: "100%",
      objectfit: "cover",
    },
    title: {
      gridArea: "t",
      margin: "0.5rem 0",
    },
    text: {
      gridArea: "x",
    },
    tools: {
      gridArea: "o",
      color: "gray",
      fontSize: "0.8rem",
      fontStyle: "italic",
      margin: "0.5rem 0",
    },
    links: {
      gridArea: "l",
      color: "#2B7A78",
      textDecoration: "none",
      "&:hover": {
        color: "#3AAFA9",
        cursor: "pointer",
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={props.img} className={classes.img} alt="ProjectImage" />

      <h4 className={classes.title}>{props.title}</h4>
      <p className={classes.text}>{props.text}</p>
      <p className={classes.tools}>{props.tools}</p>

      <a
        href={props.repoLink}
        className={classes.links}
        style={{ marginRight: "1rem" }}
      >
        Link to repo
      </a>
      <a href={props.siteLink} className={classes.links}>
        Link to site
      </a>
    </div>
  );
};

export default Project;
