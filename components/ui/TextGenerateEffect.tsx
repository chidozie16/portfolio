"use client";
import { motion } from "framer-motion";

const word = "Hi! I'm Dozie, a Web Developer based in Nigeria.";
const words = word.split(" ");

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.9, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 0,
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
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      initial={{ opacity: 0, color: "#ffffff" }}
      animate={{ opacity: 1, color: "#E9D5FF" }}
      transition={{ duration: 4 }}
      variants={container}
      className="text-center text-white mb-6 text-[40px] md:text-5xl lg:text-4xl"
    >
      {words.map((word, index) => (
        <motion.span style={{ marginRight: "7px" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextGenerateEffect;
