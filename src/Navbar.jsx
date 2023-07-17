import React from "react"; 
import { BrowserRouter, Route, Link } from "react-router-dom"; 

function Navbar() {
  return (
    <nav
    style={{
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      background: "rgba(255,255,255,0.75)",
      padding: "1rem",
      top: 0,
      width: "100%",
      zIndex: 10,
    }}
    >
      {" "}
      <ul>
        {" "}
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/projects">Projects</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/contact">Contact</Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
}
export default Navbar;
