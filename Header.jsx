import { useState } from "react";
import React from "react";
import { assets } from "../assets/assets";

const Header = () => {


  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/40 bg-[#020624]/40 backdrop-blur-lg">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <div className="flex-1">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            <img src={assets.logo} alt="Logo" className="h-20 w-auto object-contain" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-8">

            <a href="#" className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-blue-500">
              Home
            </a>

            <a href="#about" className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-blue-500">
              About
            </a>

            <a href="#projects" className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-blue-500">
              Projects
            </a>
            
            <a href="#skills" className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-blue-500">
              Skills
            </a>

            <a href="#contact" className="text-sm font-medium text-gray-100 transition-all duration-300 hover:text-blue-500">
              Contact
            </a>

          </div>
        </nav>

        {/* Resume */} 
        <div className="flex flex-1 items-center justify-end gap-4"> 
          <a href="https://drive.google.com/drive/folders/1yAT1tXaW_P6gTE0VeSN6hlF44xbu28k4?usp=drive_link" download className="flex items-center gap-2 rounded-lg border border-blue-500/60 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-100 transition-all duration-300 hover:border-blue-900 hover:bg-blue-900/50 hover:text-white" >
           <span>Resume</span> 
           <img src={assets.download_icon} alt="Download Resume" className="h-4 w-4" /> 
           </a> 
        </div>

      </div>
    </header>
  );
};

export default Header;

