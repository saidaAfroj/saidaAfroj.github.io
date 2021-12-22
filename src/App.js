import React from "react";
import About from "./Componants/About";
import Contact from "./Componants/Contact";
import Navbar from "./Componants/Navbar";
import Projects from "./Componants/Projects";
import Skills from "./Componants/Skills";
import Experience from "./Componants/Experience";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
   {/* <Navbar />*/}
   <Navbar />
    <About />
    <Skills />
    <Contact />
    <Experience />
    <Projects />
   {/* 
    <Projects />
    <Skills />
    <Experience />
    <Contact />*/}
  </main>
  )
   
}
