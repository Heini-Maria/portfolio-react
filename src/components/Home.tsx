import React from "react";
import { motion } from "framer-motion";
import { Variants } from "./types";

interface HomeProps {
  variants: Variants;
}

function Home(props: HomeProps) {
  const { variants } = props;
  const startDate = "10-03-2022";
  const startDayDate = new Date(startDate);
  const now = new Date();
  const difference = Math.floor((now.getTime() - startDayDate.getTime()) / 1000 / 60 / 60);

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ type: "ease", duration: 0.4 }}>
      <main className="home main" id="home">
        <motion.div
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "easeInOut", duration: 1.2, delay: 0.6 }}
        >
          <h1>
            Hi, I'm Heini-Maria.
            <br />
            I am a frontend developer.
          </h1>
          <h2> ..with a marketing background.</h2>
        </motion.div>
        <p>
          Nerdy fact! It's been
          <span id="time-container">{` ${difference} `}</span>
          hours since I started coding!
        </p>
      </main>
    </motion.div>
  );
}

export default Home;
