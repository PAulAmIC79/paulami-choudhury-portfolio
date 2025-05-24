import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import CVLink from "../CVLink";
import Certificate from "../certificate";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 md:flex-row flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="title-font sm:text-5xl text-3xl mb-4 sm:mb-6 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Hi, I'm Paulami Choudhury
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-gray-300"
          >
            I'm a Full Stack Web Developer trained on front-end development & back-end support, based in West Bengal.
            <br />I am passionate about web development & eager to leverage my skills in a professional environment.
            <br />With a focus on delivering high-quality projects on time, I'm seeking opportunities to contribute,
            <br />collaborate & learn.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 border-0 py-2 sm:py-3 px-4 sm:px-6 focus:outline-none rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Work With Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="inline-flex items-center text-gray-300 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 py-2 sm:py-3 px-4 sm:px-6 focus:outline-none rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <CVLink />
              <HiArrowNarrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="inline-flex items-center text-white bg-blue-900 hover:bg-blue-800 border border-blue-800 hover:border-blue-700 py-2 sm:py-3 px-4 sm:px-6 focus:outline-none rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/25"
            >
              <Certificate />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 sm:w-5/6"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="object-cover object-center rounded-2xl shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300"
            alt="hero"
            src="photo.webp"
          />
        </motion.div>
      </div>
    </section>
  );
}