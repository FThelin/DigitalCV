import React, { useEffect, useState } from "react";
import LogoContainer from "./containers/logoContainer";
import Header from "./containers/header";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/languageContext";

function App() {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    language === "sv" ? setLanguage("en") : setLanguage("sv");
    language === "en" ? setLanguage("sv") : setLanguage("en");
  };

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LogoContainer} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
