import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import pdf from "../pdf/krishna resume.pdf";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-Stack Developer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Hi, I’m{" "}
            <span className="text-yellow-400">Krishna Soni</span>
          </h1>

          <h2
            ref={typedRef}
            className="text-xl md:text-3xl font-medium text-gray-300 min-h-[40px]"
          />

          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Developer who thrives on turning complex problems into elegant, scalable software solutions.
          </p>

          <a
            href={pdf}
            download="krishna resume.pdf"
            className="
                inline-block px-7 py-2 rounded-lg
  bg-amber-400 text-black font-semibold
  hover:bg-amber-300
  transition-colors duration-300
  shadow-md
            "
          >
            Download Resume
          </a>
        </div>

      
        <div className="flex justify-center md:justify-end">
  <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden">

   
    <div className="absolute inset-0 rounded-full bg-yellow-400 blur-2xl opacity-25"></div>

    <img
      src="/assets/hero/passport krishna.jpg"
      alt="Krishna Soni"
      className="
        relative
        w-full h-full
        object-cover
        rounded-full
        shadow-2xl
        border-4 border-yellow-400
      "
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default Home;
