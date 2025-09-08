

const Skills = () => {
  const skills = [
    "Nextjs",
    "TypeScript",
    "zustand",
    "React",
    "Redux",
    "JavaScript",
    "Tailwind CSS",
    "Express",
    "Node.js",
    "MongoDB",
    "Docker",
    "GitHub",
    "Git",
    "Postman",
    "HTML",
    "CSS",
    "REST APIs",
  ];
  return (
    <div className="lg:mt-12 mt-4 ">
      <h1 className=" text-2xl font-medium mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Skills
      </h1>
      <div className="flex flex-wrap gap-4" >
        {skills.map((skill, index) => {
          return <div className="text-white border backdrop-blur-2xl hover:bg-gray-700 border-gray-400 p-2 rounded-xl " key={index}>{skill}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
