import { Link } from "react-router-dom";
import image from "../assets/janak2.jpg";
import { motion, AnimatePresence } from "motion/react";
import { Presentation } from "lucide-react";

import { Github, Linkedin, FileUser, Instagram, Twitter } from "lucide-react";
import resume from "../assets/janakshukla_resume.pdf";

import { Footprints } from "lucide-react";
import FrontAnimation from "./FrontAnimation";
import { useEffect, useState } from "react";
function Intro() {
  const [visible, setvisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setvisible(false);
    }, 2000);
  }, []);
  if (visible) {
    return <FrontAnimation />;
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="h-full  md:flex  justify-between select-none "
      >
        <div className="overflow-hidden md:h-screen lg:w-1/2  ">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image}
            alt="janak"
            className="object-cover filter grayscale hover:brightness-0 hover:filter-none duration-500 "
          />
        </div>
        <div className=" flex justify-center items-center text-white md:w-1/2 ">
          <div>
            <div>
              <h1 className="text-4xl font-serif text-center leading-loose  font-bold md:mt-4">
                I am{" "}
                <span className="text-violet-600 relative ">
                  Janak shukla
                  <svg
                  className="-z-40 absolute  -top-24 -left-2 h-64 w-64 "
                    
                    viewBox="0 0 449 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                    initial={{pathLength:0}}
                    whileInView={{pathLength:1}}
                    transition={{
                      duration:1,
                      delay:1
                
                    }}
                      d="M283.5 264.5C312 277.5 160.5 236 160.5 236C98.2165 212.261 68.8784 193.91 24.4999 154C-8.71092 107.328 -5.63839 82.0621 47.9999 39C89.653 9.37423 122.084 0.557699 204 5.50001C271.855 -0.810618 307.509 5.74865 366 39L445.5 90C447.266 125.897 444.928 147.524 434.567 172C431.806 178.523 428.475 185.248 424.5 192.5C384.589 209.93 360.427 216.907 312 221L160.5 277.5"
                      stroke="#A78BFA"
                      stroke-width="5"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-center sm:text-lg leading-tight mt-2">
                I am a full stack developer with the knowledge in
                Nextjs,MongoDB,Prisma,Expressjs,Reactjs,Nodejs and many more😊.
              </p>
            </div>
            {/* navigation */}
            <div className="flex justify-center mt-8 items-center gap-24 ">
              <Link to="/about" className="hover:text-blue-800">
                <Footprints className="md:size-14 size-9 " />
                About
              </Link>
              <Link to="/projects" className="hover:text-blue-800">
                <Presentation className="md:size-14 size-9 " />
                Projects
              </Link>
            </div>
            {/* contact */}
            <div className="mt-8">
              <div className=" items-center justify-center flex gap-8">
                <Twitter
                  className="hover:text-blue-600 font-extrabold"
                  onClick={() => window.open("https://x.com/janakshukla2004")}
                  size={45}
                />

                <Github
                  className="hover:text-blue-600 "
                  onClick={() => window.open("https://github.com/janakshukla")}
                  size={45}
                />
                <Linkedin
                  className="hover:text-blue-600 "
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/janak-shukla-b25808257/"
                    )
                  }
                  size={45}
                />
                <Instagram
                  className="hover:text-blue-600 "
                  onClick={() =>
                    window.open("https://www.instagram.com/janak.shukla.735/")
                  }
                  size={45}
                />
                <FileUser
                  className="hover:text-blue-600 "
                  onClick={() => window.open(resume)}
                  size={45}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Intro;
