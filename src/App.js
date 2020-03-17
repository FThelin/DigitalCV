import React, { useState, useEffect } from "react";
import LogoContainer from "./containers/logoContainer";
import Header from "./containers/header";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [language, setLanguage] = useState("sv");

  const changeLanguage = () => {
    language === "sv" ? setLanguage("en") : setLanguage("sv");
    language === "en" ? setLanguage("sv") : setLanguage("en");
  };

  return (
    <Router>
      <Header changeLanguage={changeLanguage} />
      <Switch>
        <Route path="/" exact component={LogoContainer} />
        <Route
          path="/about"
          exact
          render={props => <About {...props} language={language} />}
        />
        <Route path="/skills" exact component={Skills} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
