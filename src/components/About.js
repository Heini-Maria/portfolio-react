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
                My name is Heini-Maria Kotipelto, and I am passionate about bringing innovative
                ideas to life on the internet. Initially, my interest in web development was
                sparked as a hobby when I set out to create a webpage for my blog.
                Although I started by using a WordPress template,
                I quickly became enamored with the process and wanted to delve deeper into
                the mechanics of coding from scratch.
              </p>
              <p>
                Today, I am proud to say that I have successfully completed a course to
                become a Front-end Engineer and gaining
                valuable experience as an Design and Development Intern at Valletta Soft.
                My ambition is to work collaboratively with clients to build digital experiences
                that are accessible and inclusive,
                making technology more available to all individuals.
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
                <li>... learning TypeScript & PHP</li>
              </ul>
              <ul className="frameworks">
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>Jest</li>
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
