import { HiArrowRight } from "react-icons/hi";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-0 lg:ml-3 text-2xl lg:text-2xl hover:text-3xl border border-solid rounded-full p-2">
            PC
          </a>
        </a>
        <nav className="ml-8 mt-2 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-2xl justify-evenly lg:text-lg lg:justify-center">
          <a href="#skills" className="mr-5 hover:text-white hover:underline">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white hover:underline">
            Projects
          </a>
          <a href="#contact" className="mr-5 hover:text-white hover:underline">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:underline rounded lg:text-base text-xl mt-4 md:mt-0 ">
          Hire Me
          <HiArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}