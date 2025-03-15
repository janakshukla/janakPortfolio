import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Presentation, Github, Linkedin, FileUp as FileUser, Instagram, Twitter, Footprints } from "lucide-react";
import FrontAnimation from "./FrontAnimation";
import image from "../assets/janak2.jpg"
import resume from "../assets/janakshukla_resume.pdf";

function Intro() {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 6000); // Increased time to allow the full animation to play
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
        className="h-full md:flex justify-between select-none"
      >
        <div className="overflow-hidden md:h-screen lg:w-1/2">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={image}
            alt="profile"
            className="object-cover w-full h-full filter grayscale hover:brightness-100 hover:filter-none duration-500"
          />
        </div>
        <div className="flex justify-center items-center text-white md:w-1/2">
          <div>
            <div>
              <h1 className="text-4xl font-serif text-center leading-loose font-bold md:mt-4">
                I am{" "}
                <span className="text-violet-600 relative">
                  Janak Shukla
                </span>
              </h1>

              <p className="text-center sm:text-lg leading-tight text-wrap mt-2 px-4">
                I am a full stack developer with expertise in
                Next.js, MongoDB, Prisma, Express.js, React.js, Node.js, and more 😎.
              </p>
            </div>
            {/* navigation */}
            <div className="flex justify-center mt-8 items-center gap-24">
              <Link to="/about" className="hover:text-blue-800 flex flex-col items-center">
                <Footprints className="md:size-14 size-9" />
                <span>About</span>
              </Link>
              <Link to="/projects" className="hover:text-blue-800 flex flex-col items-center">
                <Presentation className="md:size-14 size-9" />
                <span>Projects</span>
              </Link>
            </div>
            {/* contact */}
            <div className="mt-8">
              <div className="items-center justify-center flex gap-8 flex-wrap px-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Twitter
                    className="hover:text-blue-600 cursor-pointer"
                    onClick={() => window.open("https://x.com/janakshukla2004")}
                    size={40}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Github
                    className="hover:text-blue-600 cursor-pointer"
                    onClick={() => window.open("https://github.com/janakshukla")}
                    size={40}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Linkedin
                    className="hover:text-blue-600 cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/janak-shukla-b25808257/")}
                    size={40}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Instagram
                    className="hover:text-blue-600 cursor-pointer"
                    onClick={() => window.open("https://www.instagram.com/janak.shukla.735/")}
                    size={40}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <FileUser
                    className="hover:text-blue-600 cursor-pointer"
                    onClick={() => window.open(resume)}
                    size={40}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Intro;
