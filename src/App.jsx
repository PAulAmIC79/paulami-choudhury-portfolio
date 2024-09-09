import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Last from "./components/Last";

export default function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Last />
    </main>
  );
}