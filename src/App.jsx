import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ShopifyDevelopment from "./components/ShopifyDevelopment";
import ShopifyProjects from "./components/ShopifyProjects";
import WebApplications from "./components/WebApplications";
//import Projects from "./components/Projects";
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
        <Experience />
        <Skills />
        <ShopifyDevelopment />
        <ShopifyProjects />
        <WebApplications />
        {/* <Projects /> */}
        
        <Contact />
        <Last />
      </BackgroundWrapper>
    </div>
  );
}