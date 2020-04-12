import React from "react";
import { createUseStyles } from "react-jss";

const Project = (props) => {
  const useStyles = createUseStyles({
    card: {
      width: "100%",
      background: "#17252A",
      borderRadius: "5px",
      color: "#DEF2F1",
      opacity: "0.8",
      boxShadow: "2px 2px 8px black",
      transition: "500ms opacity ease",
      transition: "500ms transform ease",
      "&:hover": {
        opacity: "1",
        cursor: "pointer",
        transform: "scale(1.05)",
      },
    },
    img: {
      width: "100%",
      objectfit: "cover",
      borderRadius: "5px 5px 0 0",
    },
    title: {
      margin: "0.5rem 0",
    },
    tools: {
      color: "gray",
      fontSize: "0.8rem",
      fontStyle: "italic",
      margin: "0.5rem 0",
    },
    links: {
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
      <div>
        <img src={props.img} className={classes.img} alt="ProjectImage" />
      </div>
      <div style={{ padding: "0.5rem" }}>
        <h4 className={classes.title}>{props.title}</h4>
        <p>{props.text}</p>
        <p className={classes.tools}>{props.tools}</p>
        <div>
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
      </div>
    </div>
  );
};

export default Project;
