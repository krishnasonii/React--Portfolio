import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Aos from "aos";
import "aos/dist/aos.css";

import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    Aos.init();

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
      </div>

      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default App;
