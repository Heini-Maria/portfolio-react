import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { contactSchema } from "../helpers/contactValidation";
import { Variants } from "./types";

interface ContactProps {
  variants: Variants;
}

function Contact(props: ContactProps) {
  const { variants } = props;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const navigate = useNavigate();
  const form = useRef();
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const sendEmail = () => {
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        navigate("/thankyou");
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ type: "ease", duration: 0.6 }}>
      <div id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Have an interesting project or job opportunity?
          <br />
          I would love to hear about it!
        </p>
        <section>
          <a href="https://github.com/Heini-Maria" target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/heini-maria-kotipelto/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "easeInOut", duration: 1.2, delay: 0.6 }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={() => {
              sendEmail();
            }}
          >
            <Form className="contact-form" ref={form}>
              <label htmlFor="name">*Name:</label>
              <Field className="form-field" autoComplete="off" id="name" name="name" />
              <span>
                <ErrorMessage name="name" component="span" />
              </span>
              <label htmlFor="email">*Email:</label>
              <Field className="form-field" autoComplete="off" id="email" name="email" />

              <span>
                <ErrorMessage name="email" component="span" />
              </span>
              <label htmlFor="message">*Your message:</label>
              <Field as="textarea" autoComplete="off" id="message" name="message" className="form-field" />
              <span>
                <ErrorMessage name="message" component="span" />
              </span>
              <button type="submit">Send</button>
            </Form>
          </Formik>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default Contact;
