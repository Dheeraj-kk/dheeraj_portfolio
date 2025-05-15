"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-bg-secondary to-bg-secondary/90 text-white py-8 px-4 border-t border-white/10 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm">
        <p className="text-white/80 tracking-wide">
          Made with <span className="text-red-500">❤️</span> by <span className="font-semibold text-white">Jatin Sharma</span>
        </p>
        <p className="text-white/60 tracking-tight">Thanks for visiting — All rights reserved © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
