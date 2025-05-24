import { HiArrowRight } from "react-icons/hi";
import React from "react";

export default function Navbar() {
  return (
    <header className="backdrop-blur-md bg-gray-900/30 sticky top-0 z-10 border-b border-gray-800/50">
      <div className="container mx-auto flex flex-wrap p-2 sm:p-4 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-2 md:mb-0">
          <a 
            href="#about" 
            className="ml-0 lg:ml-3 text-xl lg:text-2xl transition-all duration-300 hover:scale-110 border border-gray-700/50 rounded-full p-1.5 lg:p-2 hover:border-white/50 hover:shadow-lg hover:shadow-white/10 hover:bg-white/5"
          >
            PC
          </a>
        </a>
        <nav className="mt-1 md:mt-2 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700/50 flex flex-wrap items-center text-base sm:text-lg lg:text-lg justify-center gap-4 md:gap-0">
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border border-blue-500/50 hover:border-blue-400/50 py-1.5 px-4 lg:py-2 lg:px-6 focus:outline-none transition-all duration-300 rounded-full text-sm lg:text-base mt-2 md:mt-0 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
        >
          Hire Me
          <HiArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1.5 lg:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </header>
  );
}