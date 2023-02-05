import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
