import React from "react";
import { motion } from "framer-motion";
import { defaultVariants } from "../variants";
export const Main = ({ children, variants }) => {
  return (
    <motion.main
      variants={variants || defaultVariants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear" }} // Set the transition to linear
    >
      {children}
    </motion.main>
  );
};
