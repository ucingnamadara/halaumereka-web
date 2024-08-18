import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const AnimatedConditionButton = ({
  buttonColor,
  buttonTextColor,
  initialText,
  changeText,
  status = true,
  textToCopy,
  className = "relative block font-semibold",
}) => {
  const [isStatus, setStatus] = useState(status);

  return (
    <AnimatePresence mode="wait">
      {!isStatus ? (
        <motion.button
          className="relative flex w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.375rem] bg-white p-[10px] outline outline-1 outline-black"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {setStatus(!isStatus); navigator.clipboard.writeText(textToCopy);}}
        >
          <motion.span
            key="reaction"
            className={className}
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[150px] items-center justify-center bg-white rounded-[0.375rem] border-none p-[10px] outline outline-1 outline-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {setStatus(!isStatus)}}
        >
          <motion.span
            key="action"
            className={className}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
