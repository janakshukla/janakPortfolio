import { Github, Linkedin, Twitter } from "lucide-react";
import img from "../assets/image.png";


const Hero = () => {
  return (
    <section aria-label="Introduction">
      <div className="flex justify-between">
        <img
          className="size-40 rounded-3xl object-cover shadow-2xl shadow-[#00000040] border-2 border-[#ffffff20] hover:scale-105 transition-all duration-500 ease-in-out"
          src={img}
          alt="Portrait of Janak Shukla"
          loading="eager"
          fetchPriority="high"
          width="160"
          height="160"
        />
        {/* contact section */}
        <nav className="flex justify-end gap-2 md:gap-6 " aria-label="Social profiles">
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://github.com/janakshukla/"
            rel="noopener noreferrer"
            aria-label="Visit Janak Shukla GitHub profile"
          >
            <Github className="size-6  hover:scale-110 hover:rotate-6  text-white " />
          </a>
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://x.com/janakshukla2004/"
            rel="noopener noreferrer"
            aria-label="Visit Janak Shukla X profile"
          >
            <Twitter className="size-6  hover:scale-110 hover:rotate-6 text-white " />
          </a>
          <a
            target="_blank"
            className="hover:bg-slate-600 p-2 rounded-2xl h-fit"
            href="https://www.linkedin.com/in/janak-shukla-b25808257/"
            rel="noopener noreferrer"
            aria-label="Visit Janak Shukla LinkedIn profile"
          >
            <Linkedin className="size-6 hover:scale-110 hover:rotate-6  text-white " />
          </a>
        </nav>
      </div>
      <div className="mt-12">
        <h1 className="text-3xl md:text-4xl text-white font-semibold tracking-tighter ">
          Janak Shukla | React Developer & Full-Stack Engineer
        </h1>
        <p className="text-xl mt-3 md:text-2xl text-gray-400 tracking-tighter ">
          SD1 at WeframeTech | Rewa, India
        </p>
        <p className=" mt-3 text-gray-400 leading-snug ">
          I’m Janak Shukla, a React Developer and Full-Stack Engineer currently
          working as SD1 at WeframeTech and pursuing Computer Science
          Engineering. I build fast, scalable web applications with React,
          Next.js, Node.js, and MongoDB, and love turning ideas into polished
          products.
        </p>
      </div>
    </section>
  );
};

export default Hero;
