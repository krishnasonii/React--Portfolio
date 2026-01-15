import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-5" id="projects">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-3 text-black">
        Projects
      </h1>
      <div className="w-24 h-1 bg-amber-400 mx-auto mb-10 rounded"></div>

      <div className="row justify-content-center">
        {project.map((data) => (
          <div
            key={data.id}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
          >
            <div
              className="project-card d-flex flex-column"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
          
              <div className="project-img">
                <img src={data.imageSrc} alt={data.title} />
              </div>

            
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{data.title}</h5>

                <p className="card-text flex-grow-1">
                  {data.description}
                </p>

              
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a
                    href={data.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning btn-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
