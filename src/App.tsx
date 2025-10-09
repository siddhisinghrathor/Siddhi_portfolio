import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
  