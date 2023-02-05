import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Header() {
    return (
      <header>
        <div>
          <NavLink to="/About">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to="/Projects">
            Projects
          </NavLink>
        </div>
        <div>
          <NavLink to="/Contact">
            Contact
          </NavLink>
        </div>
      </header>
    )   
}

export default Header;
