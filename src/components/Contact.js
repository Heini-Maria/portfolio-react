import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ width: "50%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Have an interesting project or job opportunity?
          <br />
          I would love to hear about it!
        </p>
        <section role="presentation">
          <div className="contact-container-a">
            <h2>Mail me</h2>
            <p><a href="mailto:heini.kotipelto@gmail.com" title="link to send me an email">heini.kotipelto@gmail.com</a></p>
          </div>
          <div className="contact-container-b">
            <h2>Find me</h2>
            <p><a href="https://github.com/Heini-Maria" target="_blank" rel="noreferrer" title="link to my GitHub">GitHub @Heini-Maria</a></p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Contact;
