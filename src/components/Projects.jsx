import { motion } from "motion/react";

export const Projects = () => {
  const projects = [
    {
      title: "E-timecapsule",
      description:
        "A time capsule web app where you can write your thoughts and save it for future use uses Nextjs,tailwind css,prisma,mongoDB,Resend and vercel for deployment",
      codelink: "https://github.com/janakshukla/e-timecapsule",
      link: "https://janak2004.tech",
    },{
      title: "Dayui(still building)",
      description:
        "A ui library which contain multiple well designed section and public code.",
      codelink: "https://github.com/janakshukla/Dayui",
      link: "https://dayui.dpdns.org/",
    },{
      title: "multi-user drawing web",
      description:
        "A multiuser supported drawing app where you can share the link and draw with your friends uses reactjs and websocket for real time data sharing",
      codelink: "https://github.com/janakshukla/drawingapp",
      link: "https://drawingapp-ten.vercel.app/",
    },
    {
      title: "Airesumereviewer",
      description:
        "It is ai(Gemini) powered resume reviver where you can see what's the ats of your resume and where its need to be improved.",
      codelink: "https://github.com/janakshukla/airesumereviewer",
      link: "https://resumereview.janak2004.tech/",
    },
    {
      title: "Blog app",
      description:
        "A blog app(more liking a twitter clone) made with react js &tailwind css in front end and used appwrite cloud services forbackend and database",
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
