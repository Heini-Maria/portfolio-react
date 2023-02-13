import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Home({ variants }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "ease", duration: 0.4 }}
    >
      <main className="home main" id="home">
        <div className="title">
          <h1>
            Hi, I'm Heini-Maria.<br />I am a frontend developer.</h1>
          <h2> ..with a marketing background.</h2>
        </div>
        <p>
          Nerdy fact! It's been
          <span id="time-container"> 0 </span>
          hours since I started coding!
        </p>
      </main>
    </motion.div>
  );
}

export default Home;
