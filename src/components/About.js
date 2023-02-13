import React from "react";
import me from "../../assets/images/about_image.jpg";
import { motion } from "framer-motion";

function About({ variants }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "ease", duration: 0.6 }}
    >
      <section className="main about" id="about">
        <img className="profile-pic" src={me} alt="" />
        <section className="wrapper">
          <div>
            <h2>About</h2>
            <div className="about-me">
              <p className="">
                My name is Heini-Maria Kotipelto and I love
                creating things that live on the internet.
                My interest in web development started as a hobby when
                I decided to try and create a webpage for my blog.
                Although I was using a WordPress template and not coding the sites
                by myself it kindled the spark to want to
                learn more about how it is done from scratch.
              </p>
              <p>
                Fast-forward to today,
                and I successfully finished a course to become a Front-end Engineer.
                My next goal is to get to build accessible,
                inclusive products and digital experiences and work with real clients.
              </p>
            </div>
          </div>
          <section>
            <h2>Skills</h2>
            <div className="skills">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>...learning TypeScript</li>
              </ul>
              <ul className="frameworks">
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Nodejs</li>
              </ul>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Netlify</li>
                <li>WordPress</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </motion.div>
  );
}

export default About;
