import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";

export const AnimatedButton = ({
  buttonColor,
  buttonTextColor,
  initialText,
  href,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        className="relative flex nw-[200px] cursor-pointer items-center justify-center rounded-[0.375rem] border-none p-[10px]"
        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => href}
      >
        <motion.span
          key="reaction"
          className="relative block font-semibold"
          initial={{ x: 0 }}
          exit={{ x: 50, transition: { duration: 0.1 } }}
        >
          {initialText}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  );
};
