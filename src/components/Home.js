import React from "react";
import { motion } from "framer-motion";

function Home({ variants }) {
  const startDate = "10-03-2022";
  const startDayDate = new Date(startDate);
  const now = new Date();
  const difference = Math.floor((now.getTime() - startDayDate.getTime()) / 1000 / 60 / 60);

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
            Hi, I'm Heini-Maria.
            <br />
            I am a frontend developer.
          </h1>
          <h2> ..with a marketing background.</h2>
        </div>
        <p>
          Nerdy fact! It's been
          <span id="time-container">
            {` ${difference} `}
          </span>
          hours since I started coding!
        </p>
      </main>
    </motion.div>
  );
}

export default Home;
