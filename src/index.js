/*
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
// import { render } from "react-dom";

import App from "./App";

// render(<App />, document.getElementById("app"));

import * as ReactDOM from "react-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./Pages/Layout"; 
import Home from "./Components/Home"; 
import Contact from "./Pages/Contact"; 
import NoPage from "./Pages/NoPage"; 

export default function Router() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Layout />}>
          {" "}
          <Route index element={<Home />} /> 
          <Route path="contact" element={<Contact />} /> 
          <Route path="*" element={<NoPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));