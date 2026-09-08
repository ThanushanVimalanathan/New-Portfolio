import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-blue-500/40 bg-[#020624]/40 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#" className="text-2xl font-bold tracking-tight text-white">
            <img src={assets.logo} alt="Logo" className="h-20 w-auto object-contain" />
          </a>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden flex-1 justify-center md:flex">
          <motion.div
            className="flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -2,
                  textShadow: "0 0 8px rgba(59,130,246,0.8)",
                }}
                className="relative text-sm font-medium text-gray-100 transition-colors duration-300 hover:text-blue-500"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        {/* Resume */}
        <motion.div
          className="flex flex-1 items-center justify-end gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1yAT1tXaW_P6gTE0VeSN6hlF44xbu28k4?usp=drive_link"
            download
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 22px rgba(59,130,246,0.45)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-2 rounded-lg border border-blue-500/60 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-100 transition-colors duration-300 hover:border-blue-900 hover:bg-blue-900/50 hover:text-white"
          >
            <span>Resume</span>
            <img src={assets.download_icon} alt="Download Resume" className="h-4 w-4" />
          </motion.a>
        </motion.div>

      </div>
    </motion.header>
  );
};

export default Header;
