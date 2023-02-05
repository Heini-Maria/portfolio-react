import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="/projects">
          Projects
        </NavLink>
      </div>
      <div>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
