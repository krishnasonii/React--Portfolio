import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-14  text-black">
          Projects
        </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {project.map((item) => (
            <div key={item.key} className="project-card">
              
         
              <div className="project-img">
                <img
                  src={`${import.meta.env.BASE_URL}${item.imageSrc}`}
                  alt={item.title}
                />
              </div>

             
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>

                <p className="card-text">{item.description}</p>

               
                <div className="project-tech">
                  {item.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
          <div className="button-group">
  <a
    href={item.demo}
    target="_blank"
    rel="noreferrer"
    className="bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  >
    Demo
  </a>
  <a
    href={item.source}
    target="_blank"
    rel="noreferrer"
    className="bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition"
  >
    Code
  </a>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
