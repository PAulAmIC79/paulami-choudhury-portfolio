import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center md:pr-20 md:pl-20 pb-0 pt-16 md:pt-0">
      {/* Background Banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-[2px] animate-gradient-shift"></div>
      
      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img
          src="pc-4.webp"
          alt="Paulami Choudhury"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-30">
            <h1 className="text-4xl md:text-6xl font-bold text-white lg:bg-gradient-to-r lg:from-purple-400 lg:to-blue-500 lg:bg-clip-text lg:text-transparent">
              <span className="typing-animation inline-block">Paulami Choudhury</span>
            </h1>
            <p className="text-xl md:text-2xl text-white lg:text-gray-300 opacity-100">
              Crafting Digital Experiences with Code & Creativity.
            </p>
            <p className="text-gray-200 lg:text-gray-400 text-lg opacity-100">
              Blending the flexibility of MERN with the versatility of WordPress to deliver scalable web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="paulami_choudhury_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg md:w-52 bg-gradient-to-r  from-purple-500 to-blue-500 border border-white lg:border-purple-500 rounded-lg font-semibold hover:bg-white/10 lg:hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 lg:hover:shadow-purple-500/20 text-center text-white"
              >
                View My Resume
              </a>
              <a href="#contact" className="px-6 py-3 text-lg md:w-52 bg-gradient-to-r  from-blue-500 to-purple-500 border border-white lg:border-purple-500 rounded-lg font-semibold hover:bg-white/10 lg:hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 lg:hover:shadow-purple-500/20 text-center text-white">
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Picture (Desktop Only) */}
          <div className="hidden lg:flex justify-center lg:justify-end relative z-30">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
              <img
                src="pc-4.webp"
                alt="Paulami Choudhury"
                className="relative w-full h-full object-cover rounded-full border-4 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 