import React from "react";
import { createUseStyles } from "react-jss";
import "../btn.scss";

const Project = (props) => {
  const useStyles = createUseStyles({
    card: {
      width: "70rem",
      height: "32rem",
      display: "grid",
      gridGap: "0.5rem",
      gridTemplateColumns: "49.5rem 20rem",
      gridTemplateRows: "5rem 5rem 14rem 6.5rem",
      gridTemplateAreas: '"i t" "i o" "i x" "l l"',
      color: "#3aafa9",
      backgroundColor: "#17252A",
      marginBottom: "4rem",
    },
    img: {
      gridArea: "i",
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    title: {
      gridArea: "t",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(100,100,100,0.3)",
      gridArea: "l",
      color: "#2B7A78",
      textDecoration: "none",
      "&:hover": {
        color: "#3AAFA9",
        cursor: "pointer",
      },
    },
    "@media (max-width: 1120px)": {
      card: {
        width: "55rem",
        height: "25rem",
        gridTemplateColumns: "36.5rem 18rem",
        gridTemplateRows: "3rem 3rem 12rem 5.5rem",
      },
      title: {
        fontSize: "1rem",
      },
      links: {
        padding: "2rem",
      },
    },
    "@media (max-width: 880px)": {
      card: {
        width: "40rem",
        height: "47rem",
        gridTemplateColumns: "40rem",
        gridTemplateRows: "20rem 4rem 4rem 11rem 6rem",
        gridTemplateAreas: '"i" "t" "o" "x" "l"',
      },
    },
    "@media (max-width: 650px)": {
      card: {
        width: "15rem",
        height: "25rem",
        gridGap: "0.2rem",
        gridTemplateColumns: "15rem",
        gridTemplateRows: "7.5rem 2rem 2rem 8.8rem 3rem",
        gridTemplateAreas: '"i" "t" "o" "x" "l"',
      },
      text: {
        fontSize: "0.7rem",
      },
      tools: {
        fontSize: "1.3rem",
      },
      links: {
        fontSize: "0.8rem",
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
