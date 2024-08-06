import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../libs/utils";

export default function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.p key={words[index]} className={cn(className)} {...framerProps}>
        {words[index]}
      </motion.p>
    </AnimatePresence>
  );
}
