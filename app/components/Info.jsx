"use client";

import { useInView } from 'react-intersection-observer';

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Info = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger once when in view
    threshold: 0.3, // 30% of the element should be in view
  });

  return (
    <div className="flex flex-col gap-6 md:gap-18" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-accent text-2xl mt-1" />
          <div>
            <p className="text-lg">Email Address</p>
            <p className="text-accent cursor-pointer hover:underline">
              <a href="mailto:dheerajbasotra24@gmail.com">dheerajbasotra24@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-accent text-2xl mt-1" />
          <div>
            <p className="text-lg">Contact Number</p>
            <p className="text-accent">+91 9796273902</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-accent text-2xl mt-1" />
          <div>
            <p className="text-lg">Location</p>
            <p className="text-accent">Chandigarh, India</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
