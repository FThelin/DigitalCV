import React from "react";

const LogoContainer = () => {
  return (
    <div style={containerStyles}>
      <div style={flexContainer}>
        <div style={textContainer}>
          <h1 style={fredrikStyles}>FREDRIK</h1>
          <h1 style={thelinStyles}>THELIN</h1>
          <h3 style={frontendStyles}>FRONT-END</h3>
          <h3 style={developerStyles}>DEVELOPER</h3>
        </div>
        <div style={seperator}>
          <div style={{ width: "50%" }}></div>
          <div style={borderBox}></div>
        </div>
      </div>
    </div>
  );
};

export default LogoContainer;

const containerStyles = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#3AAFA9",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center"
};

const flexContainer = {
  display: "flex",
  flexDirection: "column"
};

const seperator = {
  height: "8rem",
  display: "flex"
};

const borderBox = {
  borderTop: "10px solid #2B7A78",
  borderLeft: "10px solid #2B7A78",
  width: "50%"
};

const textContainer = {
  textAlign: "left",
  fontWeight: "bold",
  borderTop: "10px solid #2B7A78",
  borderRight: "10px solid #2B7A78"
};

const fredrikStyles = {
  fontSize: "5rem",
  color: "#FEFFFF",
  letterSpacing: "10px"
};
const thelinStyles = {
  fontSize: "5rem",
  color: "#FEFFFF",
  letterSpacing: "26px"
};

const frontendStyles = {
  fontSize: "4rem",
  color: "#17252A",
  letterSpacing: "4.5px"
};
const developerStyles = {
  fontSize: "4rem",
  color: "#17252A",
  letterSpacing: "3px"
};
