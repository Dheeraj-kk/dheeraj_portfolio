"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Bolb from "../components/Bolb";

// components
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import Info from "../components/Info";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";

const fadeUp = {
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

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, ease: "easeIn", duration: 0.5 }}
      className="min-h-screen items-center flex"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full xl:h-[680px]">
          {/* Left Side - Avatar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden xl:flex xl:flex-col w-full h-full pt-14 max-w-[430px] relative"
          >
            <Image
              src="/assets/avatar.png"
              priority
              alt="hero"
              width={320}
              height={470}
              className="relative z-20 filter grayscale contrast-125 brightness-105 shadow-2xl hover:grayscale-0 transition duration-500 ease-in-out"
            />
            <div className="w-full h-[60px] absolute top-[420px] left-0 right-0 bg-gradient-to-t from-primary via-primary/90  z-30"></div>
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Bolb containerStyles="w-[420px] h-[420px]" />
            </div>
            <SocialLinks containerStyles="flex mt-4 gap-4 z-40 w-max transform translate-x-[30px]" iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer" />
          </motion.div>

          {/* Right Side - Scrollable Content */}
          <div className="w-full xl:h-[680px] xl:overflow-y-auto xl:overflow-x-hidden scrollbar-thin scrollbar-thumb-accent/70 scrollbar-track-transparent px-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent text-6xl">J</span>ATIN {" "}
                <span className="text-accent text-6xl">S</span>HARMA
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on crafting visually stunning and user-friendly web
                applications that provide seamless experiences across all
                devices. With a strong foundation in modern web technologies, I
                specialize in building responsive, scalable, and efficient
                applications. My expertise lies in JavaScript, React, and
                Next.js, enabling me to create dynamic and interactive user
                interfaces.
              </p>
              <div className="flex flex-col items-start gap-16">
                <motion.div variants={fadeUp} custom={1}>
                  <Stats />
                </motion.div>
                <motion.div variants={fadeUp} custom={2}>
                  <Testimonial />
                </motion.div>
                <motion.div variants={fadeUp} custom={3}>
                  <Info />
                </motion.div>
                <motion.div variants={fadeUp} custom={4}>
                  <Skills />
                </motion.div>
                <motion.div variants={fadeUp} custom={5}>
                  <Journey />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
