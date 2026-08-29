import { HiArrowRight } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-md bg-gray-900/30 fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50">
      <div className="container mx-auto flex flex-wrap p-2 sm:p-4 pt-4 sm:pt-4 flex-col md:flex-row items-center md:pr-32 md:pl-32">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a className="title-font font-medium text-white mb-2 md:mb-0">
            <a 
              href="#about" 
              className="ml-0 lg:ml-3 text-xl lg:text-2xl transition-all duration-300 hover:scale-110 border-2 border-white/30 hover:border-white/50 rounded-full p-2 lg:p-2.5 hover:shadow-lg hover:shadow-purple-500/20 hover:bg-gradient-to-br from-purple-500/10 to-blue-500/10 relative group"
            >
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">PC</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </a>
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-2 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700/50 items-center text-base sm:text-lg lg:text-lg justify-center gap-4 md:gap-0`}>
          <a 
            href="#experience" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1 w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1 w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1 w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="text-gray-300 hover:text-white transition-all duration-300 relative group px-2 py-1 w-full md:w-auto text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 border border-blue-500/50 hover:border-blue-400/50 py-1.5 px-4 lg:py-2 lg:px-6 focus:outline-none transition-all duration-300 rounded-full text-sm lg:text-base mt-4 md:hidden group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 w-full justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Me
            <HiArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1.5 lg:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 border border-blue-500/50 hover:border-blue-400/50 py-1.5 px-4 lg:py-2 lg:px-6 focus:outline-none transition-all duration-300 rounded-full text-sm lg:text-base mt-0 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          onClick={() => setIsMenuOpen(false)}
        >
          Hire Me
          <HiArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1.5 lg:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </header>
  );
}