import React from "react";

const Skills = () => {
  const skills = [
    "Nextjs",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "REST APIs",
    "TypeScript",
    "Redux",
    "zustand",
    "Docker",
    "Postman",
  ];
  return (
    <div className="lg:mt-12 mt-4 ">
      <h1 className=" text-2xl font-medium mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Skills
      </h1>
      <div className="flex flex-wrap gap-6" >
        {skills.map((skill, index) => {
          return <div className="text-white border backdrop-blur-2xl hover:bg-gray-700 border-gray-400 p-2 rounded-2xl " key={index}>{skill}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
