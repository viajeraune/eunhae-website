/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Projects from "./Pages/Projects"; 

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Eunhae Lee",
  title: "Product Manager, Designer, Strategist",
  email: "eunhae@mit.edu",
  gitHub: "viajeraune",
  instagram: "",
  linkedIn: "eunhaelee",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#6d7ade";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <Portfolio />
      <About />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      {/* <Projects /> */}
      {/* <Routes />  */}
    </div>
  );
};

export default App;
