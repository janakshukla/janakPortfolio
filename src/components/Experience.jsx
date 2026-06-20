import { motion } from "motion/react";

const experiences = [
  {
    company: "Headless Commerce Agency | WeframeTech",
    role: "Software Developer 1 (SD1)",
    period: "Feb 2026 – Present",
    current: true,
    description:
      "Continuing as SD1, building scalable headless commerce solutions and contributing to frontend architecture decisions.",
  },
  {
    company: "Headless Commerce Agency | WeframeTech",
    role: "Frontend Developer",
    period: "Sep 2025 – Feb 2026",
    current: false,
    description:
      "Developed and maintained frontend features for headless commerce platforms, working with modern React ecosystem tools.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-12 md:pt-24 pb-8 md:pb-16 border-t border-white/10 mt-8 md:mt-16" aria-labelledby="experience-heading">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        
        {/* Left Side: Heading */}
        <div className="w-full md:w-4/12 flex-shrink-0">
          <h2 
            id="experience-heading" 
            className="text-5xl md:text-6xl text-white tracking-tight leading-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Professional <br />
            <span className="italic text-gray-500">History</span>
          </h2>
        </div>

        {/* Right Side: Timeline/List */}
        <div className="w-full md:w-8/12">
          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col border-t border-white/10 pt-6 group"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-baseline mb-4 gap-2">
                   <div>
                      <h3 
                        className="text-3xl md:text-4xl text-gray-300 group-hover:text-white transition-colors duration-300" 
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-gray-500 font-sans tracking-[0.2em] text-[10px] md:text-xs uppercase mt-3">
                        {exp.company}
                      </p>
                   </div>
                   <div className="flex items-center gap-4 mt-2 md:mt-0">
                      {exp.current && (
                        <span className="text-[9px] tracking-widest uppercase border border-white/20 px-3 py-1 text-white rounded-full">
                          Present
                        </span>
                      )}
                      <span className="text-gray-400 font-sans text-xs tracking-wider uppercase">
                        {exp.period}
                      </span>
                   </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-sm md:text-base mt-2 md:mt-0">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
