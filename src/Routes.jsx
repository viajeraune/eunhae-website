import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
// import Layout from "./pages/Layout"; 
// import Home from "./Components/Home"; 
import Projects from "./Pages/Projects"; 
import Contact from "./Pages/Contact"; 
import NoPage from "./Pages/NoPage"; 

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NoPage} />
      </Switch>
    </Router>
  );
};