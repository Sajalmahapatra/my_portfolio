import React from "react";
import { motion } from "framer-motion";

const HelloAnimation = () => {
  const waveAnimation = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, 20, -10, 20, 0], // Waving motion
      transition: {
        duration: 1.2, // Duration of one wave cycle
        repeat: Infinity, // Infinite loop
        repeatDelay: 0.8, // Delay between cycles
      },
    },
  };

  return (
    <motion.span
      style={{
        display: "inline-block",
        marginRight: "0.5rem",
      }}
      variants={waveAnimation}
      initial="hidden"
      animate="visible"
    >
      👋
    </motion.span>
  );
};

export default HelloAnimation;
