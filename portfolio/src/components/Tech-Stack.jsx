import React from "react";

const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TailwindCSS",
  "Bootstrap",
  "Postman",
  "Git",
  "Redux",
  "Python",
  "TypeScript",
  "Firebase",
  "Netlify",
  "Vercel",
  "Express.js",
  "NodeJS",
  "NPM",
  "MongoDB",
  "MySQL",
  "Figma",
];

const badgeStyle = "mr-2 mb-2 inline-block text-center";

const TechStack = () => {
  return (
    <div className="bg-black text-white py-20" id="tech-stack">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center">
          {techStack.map((tech, index) => (
            <span key={index} className={badgeStyle}>
              <img
                src={`https://img.shields.io/badge/${tech.replace(
                  " ",
                  "%20"
                )}-black?style=for-the-badge&logo=${tech.toLowerCase()}&logoColor=white`}
                alt={tech}
                className="w-32"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
