import React from "react";
import { createUseStyles } from "react-jss";
import "../btn.scss";

const Project = (props) => {
  const useStyles = createUseStyles({
    card: {
      display: "grid",
      gridGap: "0.5rem",
      gridTemplateColumns: "70% 30%",
      gridTemplateRows: "repeat(6, 1fr)",
      gridTemplateAreas: '"i t" "i o" "i x" "i x" "i x" "l l"',
      width: "100%",
      color: "#3aafa9",
    },
    img: {
      gridArea: "i",
    },
    title: {
      gridArea: "t",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      backgroundColor: "rgba(100,100,100,0.3)",
    },
    text: {
      gridArea: "x",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#DEF2F1",
      backgroundColor: "rgba(100,100,100,0.3)",
      padding: "2rem",
    },
    tools: {
      gridArea: "o",
      color: "gray",
      fontSize: "3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(100,100,100,0.3)",
    },
    links: {
      padding: "1.5rem",
      backgroundColor: "rgba(100,100,100,0.3)",
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
      <div className={classes.tools}>{props.tools}</div>

      <div className={classes.links}>
        <a className="btn" href={props.repoLink}>
          Github Repo
        </a>
        <a className="btn" href={props.siteLink}>
          Website
        </a>
      </div>
    </div>
  );
};

export default Project;
