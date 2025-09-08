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
  return (
    <div className="lg:mt-12 mt-4 ">
      <h1 className=" text-2xl font-medium mb-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="flex flex-wrap text-white gap-6">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.1, bounce: 0.1 },
              }}
              key={index}
              className="group relative w-full lg:w-[calc(50%-12px)] bg-white/10 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 hover:border-gray-600 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  {project.link && (
                    <button
                      onClick={() => window.open(project.link, "_blank")}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Live Demo
                    </button>
                  )}
                  {project.codelink && (
                    <button
                      onClick={() => window.open(project.codelink, "_blank")}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      View Code
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
