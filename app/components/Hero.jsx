"use client";

import React from "react";
import { motion } from "framer-motion";
import useScrollHideScrollbar from "@/app/useScrollHideScrollbar";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Bolb from "./Bolb";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import Pattern from "./Pattern";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const Hero = () => {
  const isScrolling = useScrollHideScrollbar();

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 xl:px-20 relative transition-all duration-500 ${
        isScrolling ? "scrollbar-hidden" : ""
      }`}
    >
      <Pattern />

      <div className="flex flex-col-reverse xl:flex-row items-center w-full gap-10 xl:gap-0">
        {/* LEFT (TEXT) */}
        <motion.div
          className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left"
          variants={fadeUp}
          custom={0.1}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6 xl:mb-[28px]"
            variants={fadeUp}
            custom={0.2}
          >
            Hi, I’m Jatin <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Content Creator",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent inline-block"
              repeat={Infinity}
              cursor={false}
            />
          </motion.h1>

          <motion.p
            className="max-w-[500px] mb-6 text-base text-muted-foreground"
            variants={fadeUp}
            custom={0.3}
          >
            I’m a web developer with a passion for creating beautiful and
            functional websites. I love to learn new things and share my
            knowledge with others.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.4}>
            <Link href="/Contact">
              <button className="btn btn-lg btn-accent mb-6">
                <div className="flex items-center gap-x-2">
                  <span>Let's talk.</span>
                  <MdArrowOutward className="text-xl" />
                </div>
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8"
            variants={fadeUp}
            custom={0.5}
          >
            <div className="flex items-center gap-2 text-lg">
              <HiOutlinePhone className="text-accent text-xl" />
              <span>+91 79734-07367</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <HiOutlineMail className="text-accent text-xl" />
              <Link
                href="mailto:coder7jatin@gmail.com"
                className="hover:underline"
              >
                coder7jatin@gmail.com
              </Link>
            </div>
          </motion.div>

          {/* SOCIAL LINKS (Mobile Only) */}
          <motion.div className="xl:hidden mb-8" variants={fadeUp} custom={0.6}>
            <SocialLinks
              containerStyles="flex gap-4"
              iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[38px] h-[38px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT (IMAGE) */}
        <motion.div
          className="relative z-20 w-full xl:w-1/2 flex justify-center xl:justify-end pt-4 sm:pt-6"
          variants={fadeUp}
          custom={0.2}
        >
          <div className="relative w-[320px] h-[320px]  xl:w-[560px] xl:h-[560px]">
            <Bolb containerStyles="w-full h-full" />
            <Image
              src="/assets/avatar1.png"
              alt="hero"
              width={100}
              height={100}
              quality={100}
              priority
              className="
                absolute
                -top-6 left-[185px]
                -translate-x-1/2
                xl:-top-6 xl:left-[70px] xl:translate-x-0
                w-[220px] h-[300px]
                xl:w-[380px] xl:h-[480px]
                filter grayscale contrast-125 brightness-105 shadow-2xl hover:grayscale-0
                transition duration-500 ease-in-out
              "
            />
            <div className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[140px] md:h-[160px] xl:h-[180px] bg-gradient-to-t from-primary via-primary/90 to-transparent rounded-t-2xl z-0" />
          </div>
        </motion.div>

        {/* SOCIAL LINKS RIGHT SIDE */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="hidden xl:flex 2xl:flex-row gap-6 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:-translate-y-1/2"
        >
          <SocialLinks
            containerStyles="z-30 hidden xl:flex 2xl:flex-col gap-6 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[38px] h-[38px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
