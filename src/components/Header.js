import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [navBar, setNavBar] = useState(false);
  return (
    <header className="header">
      <button type="button" aria-label="menu">
        <FiMenu onClick={() => setNavBar(true)} className="menu-icon" />
      </button>
      <div className={navBar ? "nav-open" : "menu-items"}>
        <button type="button">
          <MdClose onClick={() => setNavBar(false)} className="close-icon" />
        </button>
        <NavLink
          onClick={() => setNavBar(false)}
          activeclassname="active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setNavBar(false)}
          activeclassname="active"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setNavBar(false)}
          activeclassname="active"
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => setNavBar(false)}
          activeclassname="active"
          to="contact"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
