import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const journey = [
  {
    years: "Jan/2025 - July/2025",
    role: "React JS Intern",
    institution: "Solitaire (Chandigarh)",
  },
  {
    years: "July/2020 - May/2024",
    role: "Student Bachelor",
    institution: "GGSCMT Kharar(Punjab)",
    marks: "7",
    degree: ".34 SGPA  B.Tech CSE",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Journey = () => {
  return (
    <div className="flex flex-col">
      <motion.h2
        className="h2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education <span className="text-accent">& Experience</span>
      </motion.h2>
      {journey.map((item, index) => {
        const { institution, role, years, degree, marks } = item;
        return (
          <motion.div
            key={index}
            className="flex items-start gap-8 w-full mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index + 1}
          >
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              {index < journey.length - 1 && (
                <div className="w-[2px] h-[180px] bg-gradient-to-b from-accent/60 to-transparent"></div>
              )}
            </div>
            <div className="relative max-w-[500px] w-full">
              <motion.div
                className="absolute inset-0 z-0 rounded-2xl border-2 border-accent animate-spin-slow"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.05) 20%, transparent 70%)',
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, transparent 100%)',
                }}
              ></motion.div>
              <motion.div
                className="relative z-10 p-6 rounded-2xl shadow-lg backdrop-blur bg-white/5"
                whileHover={{ scale: 1.03 }}
              >
                <p className="mb-3 text-sm text-accent uppercase tracking-wide">
                  {years}
                </p>
                <h4 className="text-xl font-semibold text-white mb-1">{role}</h4>
                {marks && degree && (
                  <p className="flex text-md text-white/70 mb-1">
                    <CountUp end={parseFloat(marks)} duration={2} delay={0.2} /> {degree}
                  </p>
                )}
                <p className="text-md text-white/50">{institution}</p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Journey;
