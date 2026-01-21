import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

    
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2A5A] text-center mb-3  text-black">
          About Me
        </h2>

    
        <div className="w-28 h-1 bg-amber-400 mx-auto mb-8 rounded"></div>

  <p className="leading-relaxed text-lg text-slate-700">
  I’m a{" "}
  <span className="font-semibold text-slate-900">
    Full-Stack MERN Developer
  </span>{" "}
  who enjoys building{" "}
  <span className="font-medium text-slate-900">
    scalable and user-focused web applications
  </span>
  , including{" "}
  <span className="font-medium text-slate-900">
    real-time chat systems
  </span>{" "}
  and{" "}
  <span className="font-medium text-slate-900">
    hotel management platforms
  </span>
  . I focus on writing{" "}
  <span className="font-medium text-slate-900">
    clean, maintainable code
  </span>
  , optimizing performance, and creating{" "}
  <span className="font-medium text-slate-900">
    smooth, intuitive user experiences
  </span>{" "}
  using modern JavaScript technologies.
  <br />
  <br />
  Alongside the MERN stack, I have hands-on experience with{" "}
  <span className="font-semibold text-slate-900">
    SQL databases and Linux environments
  </span>{" "}
  and am actively learning{" "}
  <span className="font-semibold text-slate-900">
    Docker, AWS, and modern DevOps tools
  </span>
  , enabling me to efficiently{" "}
  <span className="font-medium text-slate-900">
    build, deploy, and manage applications
  </span>{" "}
  from development to production.
</p>

      </div>
    </section>
  );
};

export default About;
