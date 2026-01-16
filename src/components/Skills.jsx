import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className="text-3xl md:text-4xl
  font-semibold
  text-[#1E2A5A]
  text-center
  tracking-tight
  mb-10  text-black">Skills</h1>
            <div className="w-30 h-1 bg-amber-400 mx-auto mb-8 rounded"></div>

        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
              <img src={`/${data.imageSrc}`} alt={data.title} />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
