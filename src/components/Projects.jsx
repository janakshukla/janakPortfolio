import { motion } from "motion/react";

export const Projects = () => {
  const professionalProjects = [
    {
      title: "Increddy",
      description:
        "A robust e-commerce storefront engineered specifically for digital key handling, featuring seamlessly integrated ticketing systems and secure transactions.",
      link: "https://increddy.com/",
    },
    {
      title: "Festhey",
      description:
        "A comprehensive event management platform equipped with secure multi-role authentication and a dedicated student-event marketplace tailored for campus engagement.",
      link: "https://festhey.agpro.co.in/",
    },
    {
      title: "raxiview",
      description:
        "An AI-integrated application designed to assist developers by generating dynamic, high-quality mock technical interview questions.",
      link: "https://raxiview.com/",
    },
    {
      title: "Master Anesthesia",
      description:
        "A specialized EdTech platform engineered for medical students and anesthesia trainees. Built with Next.js, Payload CMS, and Medusa.js, the platform features complex course management, dynamic learning progress tracking, secure user authentication, and a scalable subscription-based enrollment infrastructure powered by GraphQL.",
      link: "https://masteranesthesia.com/",
    },
  ];

  const personalProjects = [
    {
      title: "E-timecapsule",
      description:
        "A time capsule web application where you can write your thoughts and save them for future viewing. Built with Next.js, Tailwind CSS, Prisma, MongoDB, Resend for email notifications, and deployed on Vercel.",
      codelink: "https://github.com/janakshukla/e-timecapsule",
      link: "https://e-timecapsule-vtd7-tau.vercel.app/",
    },
    {
      title: "Dayui",
      description:
        "A UI inspiration library featuring multiple well-designed sections with public code examples. Continuously expanding with new sections and features, built using React.js and Tailwind CSS.",
      codelink: "https://github.com/janakshukla/Dayui",
      link: "https://dayui-sigma.vercel.app/",
    },
    {
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
      link: "https://airesumereviewer.vercel.app/",
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
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderProject = (project, index) => (
    <motion.div
      variants={cardVariants}
      key={index}
      className="group flex flex-col border-t border-white/10 pt-6"
    >
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-4">
        <h3 
          className="text-3xl md:text-4xl text-gray-300 group-hover:text-white transition-colors duration-300"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {project.title}
        </h3>
        
        <div className="flex items-center gap-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-white border-b border-white/30 hover:border-white pb-1 transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {project.codelink && (
            <a
              href={project.codelink}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-gray-500 border-b border-gray-500/30 hover:text-white hover:border-white pb-1 transition-colors duration-300"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-3xl">
        {project.description}
      </p>
    </motion.div>
  );

  return (
    <section id="projects" className="pt-12 md:pt-24 pb-8 md:pb-16 border-t border-white/10 mt-8 md:mt-16" aria-labelledby="projects-heading">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        
        {/* Left Side: Heading */}
        <div className="w-full md:w-4/12 flex-shrink-0">
          <h2 
            id="projects-heading" 
            className="text-5xl md:text-6xl text-white tracking-tight leading-none sticky top-24"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Selected <br />
            <span className="italic text-gray-500">Works</span>
          </h2>
        </div>

        {/* Right Side: Projects List */}
        <div className="w-full md:w-8/12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-16"
          >
            {/* Professional Works */}
            <div className="flex flex-col gap-10">
              <h3 className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase border-b border-white/5 pb-2">Professional Engagements</h3>
              <div className="flex flex-col gap-12">
                {professionalProjects.map(renderProject)}
              </div>
            </div>

            {/* Personal Works */}
            <div className="flex flex-col gap-10 mt-8">
              <h3 className="text-xs text-gray-500 font-sans tracking-[0.2em] uppercase border-b border-white/5 pb-2">Personal Projects</h3>
              <div className="flex flex-col gap-12">
                {personalProjects.map(renderProject)}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
