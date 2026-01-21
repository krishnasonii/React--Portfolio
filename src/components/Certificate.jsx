import React from "react";
import project from "./data/certificate.json";

const Certificate = () => {
  return (
    <div className="container projects my-5" id="certificates">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1E2A5A] text-center mb-3 text-black ">
        Certificates
      </h1>
      <div className="w-24 h-1 bg-amber-400 mx-auto mb-10 rounded"></div>

      <div className="row justify-content-center">
        {project.map((data) => (
          <div
            key={data.id}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
          >
            <div
              className="project-card certificate-card"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
           
              <div className="project-img">
                <img src={data.imageSrc} alt={data.title} />
              </div>

             
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
