const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & UI",
      skills: [
        "Next.js", 
        "React", 
        "TypeScript", 
        "JavaScript", 
        "Tailwind CSS", 
        "Framer Motion", 
        "ShadCN UI", 
        "Zustand", 
        "Redux", 
        "Figma", 
        "HTML", 
        "CSS"
      ]
    },
    {
      title: "Headless E-commerce & CMS",
      skills: [
        "Medusa.js", 
        "Payload CMS", 
        "Sanity CMS"
      ]
    },
    {
      title: "Data, APIs & Logic",
      skills: [
        "Node.js", 
        "Express", 
        "GraphQL", 
        "REST APIs", 
        "MongoDB", 
        "DBMS", 
        "AI API Integration", 
        "Algorithms & Data Structures"
        
      ]
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        "Docker", 
        "Git", 
        "GitHub", 
        "Postman"
      ]
    }
  ];

  return (
    <section id="skills" className="pt-12 md:pt-24 pb-8 md:pb-16 border-t border-white/10 mt-8 md:mt-16" aria-labelledby="skills-heading">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        
        {/* Left Side: Heading */}
        <div className="w-full md:w-4/12 flex-shrink-0">
          <h2 
            id="skills-heading" 
            className="text-5xl md:text-6xl text-white tracking-tight leading-none sticky top-24"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Technical <br />
            <span className="italic text-gray-500">Arsenal</span>
          </h2>
        </div>

        {/* Right Side: Skills Categories */}
        <div className="w-full md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col">
              <h3 className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase border-b border-white/10 pb-4 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                {category.skills.map((skill, index) => (
                  <span key={index} className="group">
                    <span className="transition-colors duration-300 hover:text-white cursor-default">
                      {skill}
                    </span>
                    {index < category.skills.length - 1 && (
                      <span className="text-gray-700 mx-2 md:mx-3 text-base">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
