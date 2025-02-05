import React from "react";
import employeeMSImage from "../assets/Ui_Librery.png";
import bookMSImage from "../assets/Crime_Portal.png";
import NutritionPro from "../assets/Pro_Nutrition.png";

const projects = [
  {
    id: 1,
    name: "UI Library",
    technologies: "HTML, CSS",
    image: employeeMSImage,
    github: "https://github.com/tauseef0786/UI-Library-Website-1",
    deploy: "https://ui-libraryp1.netlify.app/",
  },
  {
    id: 2,
    name: "Crime Portal",
    technologies: "React",
    image: bookMSImage,
    github: "https://github.com/tauseef0786/B41_WEB_033_Responsive-Rebels",
    deploy: "https://crimepetrol.netlify.app/",
  },
  {
    id: 3,
    name: "Nutrition Pro",
    technologies: "MERN Stack",
    image: NutritionPro ,
    github: "https://github.com/tauseef0786/6395-hackathon",
    deploy: "https://pronutritions.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.deploy}
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
