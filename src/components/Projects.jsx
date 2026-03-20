import { motion } from "motion/react";

export const Projects = () => {
  const projects = [
    {
      title: "E-timecapsule",
      description:
        "A time capsule web application where you can write your thoughts and save them for future viewing. Built with Next.js, Tailwind CSS, Prisma, MongoDB, Resend for email notifications, and deployed on Vercel.",
      codelink: "https://github.com/janakshukla/e-timecapsule",
      link: "https://janak2004.tech",
    },{
      title: "Dayui",
      description:
        "A UI inspiration library featuring multiple well-designed sections with public code examples. Continuously expanding with new sections and features, built using React.js and Tailwind CSS.",
      codelink: "https://github.com/janakshukla/Dayui",
      link: "https://dayui-sigma.vercel.app/",
    },{
      title: "Multi-user Drawing Web",
      description:
        "A collaborative drawing application supporting multiple users in real-time. Share the link with friends and draw together, built with React.js and WebSocket for seamless real-time data sharing.",
      codelink: "https://github.com/janakshukla/drawingapp",
      link: "https://drawingapp-ten.vercel.app/",
    },
    {
      title: "AI Resume Reviewer",
      description:
        "An AI-powered resume reviewer using Google Gemini API. Analyze your resume's ATS score and receive detailed feedback on areas for improvement to enhance your job application success.",
      codelink: "https://github.com/janakshukla/airesumereviewer",
      link: "https://resumereview.janak2004.tech/",
    },
    {
      title: "Blog App",
      description:
        "A social blogging platform similar to Twitter, featuring user authentication, post creation, and social interactions. Built with React.js and Tailwind CSS frontend, powered by Appwrite cloud services for backend and database.",
      codelink: "https://github.com/janakshukla/blog-app",
      link: "https://blog-app-khaki-three.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="lg:mt-12 mt-4 ">
      <h1 className=" text-2xl font-medium mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Projects
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="flex flex-wrap text-white gap-6"
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              key={index}
              className="group relative overflow-hidden w-full lg:w-[calc(50%-12px)] bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/60 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10" />
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codelink && (
                    <a
                      href={project.codelink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
