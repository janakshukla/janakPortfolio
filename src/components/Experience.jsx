import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

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
    period: "September 2025 – February 2026 · 6 months",
    current: false,
    description:
      "Developed and maintained frontend features for headless commerce platforms, working with modern React ecosystem tools.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="lg:mt-12 mt-4" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-2xl font-medium mb-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Experience
      </h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative w-full bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 hover:bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 hover:border-gray-600 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-blue-600/20 rounded-lg shrink-0">
                <Briefcase className="size-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-blue-300 font-medium text-sm mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
