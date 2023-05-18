import React from "react";
import { motion } from "framer-motion";

function ThankyouPage() {
  return (
    <motion.div
      className="thank-you"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "easeInOut", duration: 1.2, delay: 0.6 }}
    >
      <h2>Thank you for your message!</h2>
      <p>I will reply to you shortly...</p>
    </motion.div>
  );
}

export default ThankyouPage;
