import { motion,AnimatePresence } from "motion/react";

import janakdadhaba from "../assets/janakdadhaba.png";
import fundraw from "../assets/fundraw.png";
import blog from "../assets/blog.png";
import Etimecapsule from "../assets/Etimecapsule.png";
import { X,Share,Code2Icon } from "lucide-react";

 const Projects = () => {
 
 
  const projects = [
    {
      title: "E-timecapsule",
      description:
        "A time capsule web app where you can write your thoughts and save it for future use uses Nextjs,tailwind css,prisma,mongoDB,Resend and vercel for deployment",
      image: Etimecapsule,
      link: "https://github.com/janakshukla/e-timecapsule",
      codelink: "https://janak2004.tech",
    },
    {
      title: "multi-user drawing web",
      description:
        "A multiuser supported drawing app where you can share the link and draw with your friends uses reactjs and websocket for real time data sharing",
      image: fundraw,
      link: "https://github.com/janakshukla/drawingapp",
      codelink: "https://drawingapp-ten.vercel.app/",
    },
    {
      title: "food recipe",
      description:
        "A food recipe web app mainly focus on ui uses react js and tailwind css and uses mealdb api for data and basic animation using gsap",
      image: janakdadhaba,
      link: "https://github.com/janakshukla/food_recipe",
      codelink: "https://janakdadhaba.vercel.app/",
    },
    {
      title: "Blog app",
      description:
        "A blog app(more liking a twitter clone) made with react js &tailwind css in front end and used appwrite cloud services forbackend and database",
      image: blog,
      link: "https://github.com/janakshukla/blog-app",
      codelink: "https://blog-app-khaki-three.vercel.app/",
    },
  ];
  const miniprojects = [
    {
      title: "videostreaming webapp",
      link: "https://github.com/janakshukla/VIDEO_STREAMING",
    },
    {
      title: "password genrator",
      link: "https://github.com/janakshukla/password-genartor",
    },
    {
      title: "weather app",
      link: "https://github.com/janakshukla/weather_app",
    },
    {
      title: "currency converter",
      link: "https://github.com/janakshukla/02-currency-converter",
    },
    {
      title: "todo app",
      link: "https://github.com/janakshukla/to-do-list",
    },
  ];

  return (
    <AnimatePresence>
     
       (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="z-10 top-0 left-0 select-none place-items-center  md:flex text-white  md:h-full  md:w-full  bg-gray-900 md:bg-opacity-90 backdrop-blur-md  absolute"
        >
          {/* left div */}
          <div className="h-full w-3/4 grid md:grid-cols-3 justify-center md:grid-rows-2 gap-2 ">
            {projects.map((project, index) => (
              <div
                key={index}
                className="mx-2 bg-gray-950/10 rounded-xl overflow-hidden backdrop-blur-md"
              >
                <div className="w-full h-1/2 overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="object-fit w-full"
                  />
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold md:text-xl">
                      {project.title}
                    </h1>
                    <p className="md:text-[0.7rem] text-[0.4rem]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between m-1 my-6 ">
                    <button
                      className="text-white py-2 px-3 rounded-sm hover:text-blue-800"
                      onClick={() => {
                        window.open(project.link);
                      }}
                    >
                      <Code2Icon/>
                    </button>
                    <button
                      className=" text-white py-2 px-3 rounded-sm hover:text-blue-800"
                      onClick={() => {
                        window.open(project.codelink);
                      }}
                    >
                      <Share />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* right div */}
          <div className="h-full md:w-1/4">
            {miniprojects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-950/10 rounded-xl flex justify-between m-2 p-2"
              >
                <h1 className="font-semibold md:text-xl">{project.title}</h1>
                <button
                  className="bg-blue-600 text-white py-2 px-3 rounded-sm hover:bg-blue-800"
                  onClick={() => {
                    window.open(project.link);
                  }}
                >
                  code
                </button>
              </div>
            ))}
          </div>
          <X
            className="absolute right-0 top-0 bg-red-500"
            onClick={() => {
              window.history.back()
            }}
          />
        </motion.div>
      )
    </AnimatePresence>
  );
};
export default Projects;
