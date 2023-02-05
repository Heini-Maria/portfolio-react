import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header class="header">
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
      <Routes>
        <Route exact path="/"></Route>
        <Route exact path="/About"></Route>
        <Route exact path="/Projects"></Route>
        <Route exact path="/Contact"></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
