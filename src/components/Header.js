import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink activeclassname="active" to="about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink activeclassname="active" to="projects">
          Projects
        </NavLink>
      </div>
      <div>
        <NavLink activeclassname="active" to="contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
