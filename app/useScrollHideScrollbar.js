"use client";

import { useEffect, useState } from "react";

export default function useScrollHideScrollbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolling(false);
      }, 1200); // 1.2s after scroll stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolling;
}
