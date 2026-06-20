import { Github, Linkedin, Twitter } from "lucide-react";
import img from "../assets/janakspp.png";

const Hero = () => {
  return (
    <section aria-label="Introduction" className="pt-12 md:pt-24 pb-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
        
        {/* Left Side: Portrait */}
        <div className="relative w-full max-w-[280px] md:w-4/12 flex-shrink-0">
          <div className="aspect-[4/5] overflow-hidden relative group border border-white/10">
            {/* The grayscale class enforces the black & white editorial aesthetic */}
            <img
              className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
              src={img}
              alt="Portrait of Janak Shukla"
              loading="eager"
              fetchPriority="high"
            />
            {/* Subtle inner shadow/border overlay */}
            <div className="absolute inset-0 border border-white/5 z-10 pointer-events-none transition-colors duration-500 group-hover:border-white/20"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-8/12 flex flex-col justify-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            React Dev <br />
            <span className="italic text-gray-500">&</span> Engineer
          </h1>

          <div className="h-[1px] w-full bg-white/10 my-8"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase font-sans mb-3">
                Currently
              </p>
              <p className="text-lg md:text-xl text-white font-light">
                SD1 at WeframeTech
                <br />
                <span className="text-gray-400">Rewa, India</span>
              </p>
            </div>

            <div className="flex-1">
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase font-sans mb-3">
                About
              </p>
              <p className="text-base text-gray-300 leading-relaxed font-light">
                Computer Science Engineering graduate (B.Tech), currently working full-time as an SD1 at WeframeTech. I build fast, scalable web applications with React, Next.js, Node.js, and MongoDB. I love turning ideas into polished products.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6">
             <nav className="flex gap-4" aria-label="Social profiles">
                <a
                  target="_blank"
                  className="group relative p-2 -ml-2"
                  href="https://github.com/janakshukla/"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="size-5 text-gray-500 transition-colors duration-300 group-hover:text-white" />
                </a>
                <a
                  target="_blank"
                  className="group relative p-2"
                  href="https://x.com/janakshukla2004/"
                  rel="noopener noreferrer"
                  aria-label="X profile"
                >
                  <Twitter className="size-5 text-gray-500 transition-colors duration-300 group-hover:text-white" />
                </a>
                <a
                  target="_blank"
                  className="group relative p-2"
                  href="https://www.linkedin.com/in/janak-shukla-b25808257/"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="size-5 text-gray-500 transition-colors duration-300 group-hover:text-white" />
                </a>
             </nav>
             <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
