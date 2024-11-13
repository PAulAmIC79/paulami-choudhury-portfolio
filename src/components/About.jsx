import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import ResumeLink from "../ResumeLink";
import CertificateLink from "../CertificateLink";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Paulami Choudhury.
          </h1>
          <p className="mb-8 leading-relaxed mt-5">
          I'm a Full Stack Web Developer trained on front-end development & back-end support, based in West Bengal.
          <br />I am passionate about web development & eager to levarage my skills in a professional environment. 
          <br />With a focus on delivering high-quality projects on time, I'm seeking opportunities to contribute,
          <br />collaborate & learn.
          </p>
          <div className="flex justify-center mt-5">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-950 rounded text-lg">
              Work With Me
            </a>
            <a 
              href="/"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <ResumeLink /><HiArrowNarrowDown className="h-12 lg:w-4 lg:h-7 ml-1" />
            </a>
          </div>
          <div className="flex justify-items-start mt-5">
          <a 
              href="/"
              className="inline-flex text-white bg-blue-950  border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <CertificateLink />
            </a>
            </div>
        </div>
        <div className="w-80 lg:w-96 lg:mr-16">
          <img
            className="object-cover object-center rounded-fully"
            alt="hero"
            src="photo.webp"
          />
          </div>
      </div>



    </section>

    
  );
}