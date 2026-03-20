import { Github, Linkedin, Twitter } from "lucide-react";
import img from "../assets/image.png";


const Hero = () => {
  return (
    <div
    >
      <div className="flex justify-between">
        <img
          className="size-40 rounded-3xl object-cover shadow-2xl shadow-[#00000040] border-2 border-[#ffffff20] hover:scale-105 transition-all duration-500 ease-in-out"
          src={img}
          alt="this is hero image"
        />
        {/* contact section */}
        <div className="flex justify-end gap-2 md:gap-6 ">
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://github.com/janakshukla/"
          >
            <Github className="size-6  hover:scale-110 hover:rotate-6  text-white " />
          </a>
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://x.com/janakshukla2004/"
          >
            <Twitter className="size-6  hover:scale-110 hover:rotate-6 text-white " />
          </a>
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://www.linkedin.com/in/janak-shukla-b25808257/"
          >
            <Linkedin className="size-6 hover:scale-110 hover:rotate-6  text-white " />
          </a>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl md:text-4xl text-white font-semibold tracking-tighter ">
          Hi, I'm Janak shukla
        </h1>
        <p className="text-xl mt-3 md:text-2xl text-gray-400 tracking-tighter ">
          {" "}
          20, Rewa | Fullstack Engineer{" "}
        </p>
        <p className=" mt-3 text-gray-400 leading-snug ">
          I’m Janak Shukla, currently working as SD1 at WeframeTech and
          pursuing Computer Science Engineering. I build full-stack web
          applications with React, Next.js, Node.js, and MongoDB, and love
          turning ideas into fast, polished products.
        </p>
      </div>
    </div>
  );
};

export default Hero;
