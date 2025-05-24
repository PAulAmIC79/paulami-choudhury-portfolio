import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import Certificate from "../certificate";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 md:pr-28 md:pl-28">
      <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-32 md:flex-row flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-4/5 sm:w-5/6 mb-8 md:mb-0"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <img
              className="relative object-cover object-center rounded-2xl shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all duration-300"
              alt="hero"
              src="pc-5.webp"
            />
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-center mb-8 md:mb-0 items-center text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="title-font sm:text-6xl text-4xl mb-4 sm:mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          >
            Hi, I Am Paulami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="sm:mb-8 leading-relaxed text-base sm:text-lg text-gray-300 max-w-2xl"
          >
            I'm a Full Stack Web Developer trained on front-end development & back-end support, based in West Bengal.
            I am passionate about web development & eager to leverage my skills in a professional environment.
            With a focus on delivering high-quality projects on time, I'm seeking opportunities to contribute,
            collaborate & learn.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 sm:py-4 px-6 sm:px-8 focus:outline-none rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Certificate />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}