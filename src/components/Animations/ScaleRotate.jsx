import { motion } from "framer-motion";
import React from "react";

const ScaleRotate = ({ IconCode }) => {
  const AnimatedIconCode = motion.create(IconCode);

  return (
    <AnimatedIconCode
      size={35} // Adjust size as needed
      className="text-blue-500"
      animate={{
        scale: [0.8, 1.2, 0.8], // Scaling
        rotate: [0, 360], // Rotation
        opacity: [1, 0.5, 1],
        color: ["#1e40af", "#f97316", "#1e40af"],
      }}
      transition={{
        scale: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
        rotate: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
        opacity: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
        color: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    />
  );
};

export default ScaleRotate;
