import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Last from "./components/Last";
import BackgroundWrapper from "./components/BackgroundWrapper";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BackgroundWrapper>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Last />
      </BackgroundWrapper>
    </div>
  );
}