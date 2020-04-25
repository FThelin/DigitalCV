import React from "react";
import { createUseStyles } from "react-jss";
import "../btn.scss";

const Project = (props) => {
  const useStyles = createUseStyles({
    card: {
      display: "grid",
      gridGap: "0.5rem",
      gridTemplateColumns: "59rem auto",
      gridTemplateRows: "5rem 5rem 19rem auto",
      gridTemplateAreas: '"i t" "i o" "i x" "l l"',
      color: "#3aafa9",
      backgroundColor: "#17252A",
      margin: "4rem 0",
      height: "60vh",
    },
    img: {
      gridArea: "i",
      objectFit: "cover",
      width: "100%",
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
    "@media (max-width: 1024px)": {
      card: {
        gridTemplateColumns: "72% 28%",
        gridTemplateRows: "15% 15% 36% 34%",
      },
      title: {
        fontSize: "1rem",
      },
      links: {
        padding: "2rem",
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
        <a target="_blank" className="btn" href={props.repoLink}>
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
