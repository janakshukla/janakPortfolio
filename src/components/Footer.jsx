import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-32 pt-12 md:pt-24 pb-8 border-t border-white/10 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 mb-16 md:mb-24">
        
        {/* Left Side: Call to Action */}
        <div className="flex flex-col">
          <h2 
            className="text-5xl md:text-7xl text-white tracking-tight leading-none mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let's build <br />
            <span className="italic text-gray-500">something great.</span>
          </h2>
          <a 
            href="mailto:hello@janakshukla.com" 
            className="group flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase font-sans text-white w-fit border-b border-white/30 hover:border-white pb-2 transition-all duration-300"
          >
            Get in touch
            <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Right Side: Links */}
        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] text-gray-600 font-sans tracking-[0.2em] uppercase mb-2">Socials</h3>
            <a 
              href="https://github.com/janakshukla/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm tracking-widest font-sans uppercase text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://x.com/janakshukla2004/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm tracking-widest font-sans uppercase text-gray-300 hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
            <a 
              href="https://www.linkedin.com/in/janak-shukla-b25808257/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-sm tracking-widest font-sans uppercase text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Gigantic Name Typographic Block - Stacked & Offset */}
      <div className="w-full overflow-hidden flex flex-col py-8 md:py-12 border-t border-b border-white/10 mb-8 select-none">
         <h1 
           className="text-[22vw] md:text-[16vw] leading-[0.8] text-white tracking-tighter w-full text-left" 
           style={{ fontFamily: "'Instrument Serif', serif" }}
         >
           JANAK
         </h1>
         <h1 
           className="text-[22vw] md:text-[16vw] leading-[0.8] text-gray-500 tracking-tighter italic w-full text-right" 
           style={{ fontFamily: "'Instrument Serif', serif" }}
         >
           SHUKLA
         </h1>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-gray-600 font-sans">
         <p>&copy; {new Date().getFullYear()} Janak Shukla. All Rights Reserved.</p>
         <p>Engineered with React & Tailwind</p>
      </div>
    </footer>
  );
}