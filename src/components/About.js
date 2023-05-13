import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/images/about_image2-min.png";

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
                My name is Heini-Maria Kotipelto, and I am passionate about
                bringing innovative ideas to life on the internet. Initially, my
                interest in web development was sparked as a hobby when I set
                out to create a webpage for my blog. Although I started by using
                a WordPress template, I quickly became enamored with the process
                and wanted to delve deeper into the mechanics of coding from
                scratch.
              </p>
              <p>
                Today, I am an enthusiastic Junior Frontend Developer with a
                solid foundation in HTML, CSS, and JavaScript, and a passion for
                creating captivating web applications using React and React
                Native. Skilled in web development and design, I bring a unique
                blend of technical expertise and marketing background, holding a
                bachelor's degree in business. Experienced in content creation,
                email marketing campaigns, and a commitment to lifelong learning
                in the ever-evolving tech industry.
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
                <li>SQL</li>
                <li>TypeScript</li>
              </ul>
              <ul className="frameworks">
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Jest</li>
              </ul>
              <ul>
                <li>Jira</li>
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
