"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const services = [
  {
    icon: "/assets/services/design.svg",
    href: "",
    title: "Website Interface Design",
  },
  {
    icon: "/assets/services/frontend.svg",
    href: "",
    title: "Frontend Development",
  },
  {
    icon: "/assets/services/backend.svg",
    href: "",
    title: "Backend Development",
  },
  {
    icon: "/assets/services/seo.svg",
    href: "",
    title: "System Engine Optimization",
  },
  {
    icon: "/assets/services/video.svg",
    href: "",
    title: "Video Production",
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

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2.4, ease: "easeIn", duration: 0.5 }}
      className="h-screen items-center flex"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <motion.h2
            className="h2 max-w-[580px] text-left xl:mb-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Custom <span className="text-accent">Web Solutions</span> to Boost
            Your Business
          </motion.h2>
          <motion.button
            className="btn btn-lg btn-accent flex gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            All services <MdArrowRightAlt className="text-2xl" />
          </motion.button>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={false}
          className="w-full h-[320px]"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between border border-white/10 hover:shadow-[0_0_20px_#22d3ee50] transition-shadow duration-300 ease-in-out"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                custom={index + 1}
              >
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src={item.icon}
                    width={48}
                    height={48}
                    alt="Service icon"
                    priority
                  />
                  <motion.div
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:scale-110 transition-all"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MdOutlineArrowOutward />
                  </motion.div>
                </div>
                <motion.h5
                  className="text-[22px] font-medium max-w-[240px]"
                  whileHover={{ scale: 1.05, color: "#f39c12" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h5>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Services;
