import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="active" to="about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="active" to="projects">
          Projects
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="active" to="contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
