"use client";
import { motion } from "framer-motion";

// Keep the two lines separate
const lines = ["Hi! I'm Dozie, a Web Developer", "based in Nigeria."];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1, // Fixed: was 0 in your snippet
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const TextGenerateEffect = () => {
  return (
    <motion.div
      // Changed display to "block" or "flex flex-col" to stack the lines
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "2rem",
        alignItems: "center",
      }}
      initial={{ opacity: 0, color: "#ffffff" }}
      animate={{ opacity: 1, color: "#E9D5FF" }}
      transition={{ duration: 2 }}
      variants={container}
      className="text-center text-white mb-6 text-[40px] md:text-5xl lg:text-4xl"
    >
      {lines.map((line, lineIndex) => (
        <motion.div
          key={lineIndex}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              style={{
                marginRight: "10px",
                display: "inline-block",
              }}
              key={wordIndex}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextGenerateEffect;
