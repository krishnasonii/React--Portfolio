import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1  className="  text-3xl md:text-4xl
  font-semibold
  text-[#1E2A5A]
  text-center
  tracking-tight
  mb-10  text-black">Experience</h1>
          <div className="w-30 h-1 bg-amber-400 mx-auto mb-8 rounded"></div>

        {experience.map((data) => {
          return (
            <>
              <div
                 key={data.id}
           className="ex-items text-center my-5 mx-auto"
         data-aos="zoom-in"
        data-aos-duration="1000"
              >
                <div className="left">
                 <img
                src={`${import.meta.env.BASE_URL}${data.imageSrc}`}
                alt={data.organisation}
              />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
