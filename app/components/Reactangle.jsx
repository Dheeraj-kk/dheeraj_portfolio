"use client";
import { animate, motion } from "framer-motion";
import { extendTailwindMerge } from "tailwind-merge";

const reactangkeVariants = {
  initial: {
    y: "-100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "-100%"],
    height: ["0%", "100%"],
  },
};

const Reactangle = () => {
  return (
    <>
      <motion.div
        variants={reactangkeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1], }}
        className="h-screen top-full w-screen fixed z-30 flex bg-[#1b162b]"
      />
      <motion.div
        variants={reactangkeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.25, duration: 0.8, ease: [0.63, 0, 0.17, 1], }}
        className="h-scree top-full n w-screen fixed z-20 flex bg-[#241e36]"
      />
      <motion.div
        variants={reactangkeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.35, duration: 1, ease: [0.63, 0, 0.17, 1], }}
        className="h-scree top-full n w-screen fixed z-10 flex bg-[#2e2743]"
      />
      <motion.div
        variants={reactangkeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.45, duration: 1, ease: [0.63, 0, 0.17, 1], }}
        className="h-scree top-full n w-screen fixed z-10 flex bg-[#2e2743]"
      />
    </>
  );
};

export default Reactangle;
