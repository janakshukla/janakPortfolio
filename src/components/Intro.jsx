import { Link } from "react-router-dom";
import image from "../assets/janak2.jpg";
import { motion } from "motion/react";
import { Presentation } from "lucide-react";

import { Github, Linkedin, FileUser, Instagram, Twitter } from "lucide-react";
import resume from "../assets/janakshukla_resume.pdf";

import { Footprints } from "lucide-react";
function Intro() {
  return (
    <>
      <motion.div className="h-full  md:flex  justify-between ">
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
                I am Janak shukla
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
            <div className="mt-8" >
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
    </>
  );
}

export default Intro;
