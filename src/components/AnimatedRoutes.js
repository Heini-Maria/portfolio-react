import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import ThankyouPage from "./ThankyouPage";

function AnimatedRoutes() {
  const variants = {
    hidden: { opacity: 0.8, scale: 0.8 },
    visible: { scale: 1, opacity: 1 },
  };
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home variants={variants} />} />
        <Route path="/about" element={<About variants={variants} />} />
        <Route path="/projects" element={<Projects variants={variants} />} />
        <Route path="/contact" element={<Contact variants={variants} />} />
        <Route path="/thankyou" element={<ThankyouPage variants={variants} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
