import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({ children, duration = 3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
