import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Last from "./components/Last";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="space-y-12 sm:space-y-16 md:space-y-24 py-6 sm:py-12">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Last />
        </div>
      </div>
    </main>
  );
}