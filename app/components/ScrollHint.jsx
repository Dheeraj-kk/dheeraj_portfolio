"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

const pageFlow = ["/" , "/about" ,"/services" ,"/work" ,"/contact" ]; // Update based on your actual routes

const ScrollHint = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    const index = pageFlow.indexOf(pathname);
    if (index !== -1 && index < pageFlow.length - 1) {
      setNextPage(pageFlow[index + 1]);
    } else {
      setNextPage(""); // No next page
    }
  }, [pathname]);

  if (!nextPage) return null;

  return (
    <motion.button
      onClick={() => router.push(nextPage)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="hidden xl:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-hover transition"
    >
      <MdArrowDownward className="text-2xl" />
    </motion.button>
  );
};

export default ScrollHint;
