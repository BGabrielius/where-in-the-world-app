import React from "react";

import { motion } from "framer-motion";

import styledButton from "./Button.module.css";

interface Props {
  text: String;
  action: () => void;
}

const Button: React.FC<Props> = ({ text, action }) => {
  return (
    <motion.button
      className={`${styledButton.btn} quiz-btn`}
      onClick={action}
      initial={{ y: -100, scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ delay: 1.25, duration: 0.1 }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
