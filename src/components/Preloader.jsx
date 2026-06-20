import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

// eslint-disable-next-line react/prop-types
const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "chars" });

    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.set(containerRef.current, { autoAlpha: 1 });

    // DrawSVG Animation for the geometric shapes
    tl.fromTo(".draw-shape", {
      drawSVG: "0%"
    }, {
      drawSVG: "100%",
      duration: 1.5,
      stagger: {
        each: 0.02,
        from: "center"
      },
      ease: "power2.inOut",
    }, 0);

    // Text Split Animation - Elegant fade and drift
    tl.from(split.chars, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.02,
      ease: "power3.out",
    }, 0.4); 

    // Subtitle fade in
    tl.fromTo(".draw-subtitle", { opacity: 0, y: 10 }, {
      opacity: 0.5,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 1);

    // Fade out everything together
    tl.to(split.chars, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.01,
      ease: "power2.in",
    }, "+=0.4");

    tl.to(".draw-subtitle", {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.in"
    }, "<");

    tl.to(".draw-shape", {
      drawSVG: "100% 100%", // Erase SVG
      duration: 0.8,
      stagger: 0.02,
      ease: "power2.inOut"
    }, "<"); 

    tl.to(containerRef.current, {
      duration: 0.8,
      yPercent: -100,
      ease: "power4.inOut"
    }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0b0d] text-white opacity-0 invisible overflow-hidden"
    >
      {/* Background Geometric Spirograph Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 1000" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid slice" 
          className="absolute w-full h-full"
        >
          <g transform="translate(500, 500)">
            {/* Elegant Mathematical Wireframe / Spirograph */}
            {Array.from({ length: 36 }).map((_, i) => (
              <ellipse
                key={`spiro-${i}`}
                className="draw-shape opacity-[0.12]"
                cx="0"
                cy="0"
                rx="600"
                ry="120"
                stroke="white"
                strokeWidth="1"
                fill="none"
                transform={`rotate(${i * 10})`}
              />
            ))}
            
            {/* Inner Core Rings */}
            {Array.from({ length: 3 }).map((_, i) => (
              <circle
                key={`core-${i}`}
                className="draw-shape opacity-20"
                cx="0"
                cy="0"
                r={150 + i * 50}
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center p-4">
        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="text-6xl md:text-8xl tracking-tight text-center italic"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Janak Shukla
          </h1>
        </div>
        <div className="overflow-hidden mt-6">
          <p className="text-center text-white font-sans text-xs md:text-sm tracking-[0.2em] uppercase draw-subtitle">
            Engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
