import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// eslint-disable-next-line react/prop-types
const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the main container before calling onComplete to hide preloader smoothly
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: onComplete
        });
      }
    });

    // Make container visible immediately
    tl.set(containerRef.current, { autoAlpha: 1 });

    // Initial position: truck is completely off-screen to the left
    tl.set(".truck-group", { x: -2000 });

    // 1. Truck drives in to the center
    tl.to(".truck-group", {
      x: 225, // Centers the 850px truck inside the 1400px viewBox
      duration: 0.8,
      ease: "power2.out"
    }, "in");

    // Rotate wheels while driving in (2 full rotations)
    tl.to(".wheel", {
      rotation: "+=720",
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power2.out"
    }, "in");

    // 2. Pause in the center for user to read
    tl.to({}, { duration: 0.8 });

    // 3. Truck drives off-screen to the right
    tl.to(".truck-group", {
      x: 3000,
      duration: 0.8,
      ease: "power2.in"
    }, "out");

    // Rotate wheels while driving out
    tl.to(".wheel", {
      rotation: "+=720",
      transformOrigin: "50% 50%",
      duration: 0.8,
      ease: "power2.in"
    }, "out");

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0b0d] text-white opacity-0 invisible overflow-hidden"
    >
      <div className="truck-container w-full max-w-[1400px] flex justify-center items-center absolute px-4">
        <svg 
          viewBox="0 0 1400 300" 
          className="w-full h-auto overflow-visible"
        >
          {/* --- Stationary Road --- */}
          <g className="road">
            {/* Long infinite road line */}
            <line x1="-3000" y1="235" x2="4400" y2="235" stroke="white" strokeWidth="2" />
            
            {/* Speed Breakers */}
            <path d="M 200 235 Q 220 220 240 235" fill="#0c0b0d" stroke="white" strokeWidth="2" />
            <path d="M 1150 235 Q 1170 220 1190 235" fill="#0c0b0d" stroke="white" strokeWidth="2" />
          </g>

          <g className="truck-group">
            {/* --- Shipping Container --- */}
            <rect 
              x="50" y="50" width="600" height="150" 
              fill="none" stroke="white" strokeWidth="2" 
            />
            
            {/* --- Container Details --- */}
            {/* Corner braces */}
            <path d="M 50 65 L 65 65 L 65 50" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 635 50 L 635 65 L 650 65" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 50 185 L 65 185 L 65 200" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 635 200 L 635 185 L 650 185" fill="none" stroke="white" strokeWidth="2" />
            
            {/* Vertical Ribs */}
            <line x1="70" y1="50" x2="70" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="90" y1="50" x2="90" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="610" y1="50" x2="610" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="630" y1="50" x2="630" y2="200" stroke="white" strokeWidth="2" opacity="0.3" />
            
            {/* Container Text */}
            <text 
              x="350" y="115" 
              fill="white" 
              textAnchor="middle" 
              className="text-4xl md:text-5xl tracking-tight italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Janak Shukla
            </text>
            <text 
              x="350" y="160" 
              fill="white" 
              textAnchor="middle" 
              className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase"
            >
              Developer
            </text>

            {/* --- Trailer Wheels --- */}
            <g className="wheel">
              <circle cx="150" cy="200" r="35" fill="#0c0b0d" stroke="white" strokeWidth="2" />
              <circle cx="150" cy="200" r="10" fill="none" stroke="white" strokeWidth="2" />
              <line x1="150" y1="165" x2="150" y2="190" stroke="white" strokeWidth="2" />
              <line x1="150" y1="210" x2="150" y2="235" stroke="white" strokeWidth="2" />
              <line x1="115" y1="200" x2="140" y2="200" stroke="white" strokeWidth="2" />
              <line x1="160" y1="200" x2="185" y2="200" stroke="white" strokeWidth="2" />
            </g>
            
            <g className="wheel">
              <circle cx="250" cy="200" r="35" fill="#0c0b0d" stroke="white" strokeWidth="2" />
              <circle cx="250" cy="200" r="10" fill="none" stroke="white" strokeWidth="2" />
              <line x1="250" y1="165" x2="250" y2="190" stroke="white" strokeWidth="2" />
              <line x1="250" y1="210" x2="250" y2="235" stroke="white" strokeWidth="2" />
              <line x1="215" y1="200" x2="240" y2="200" stroke="white" strokeWidth="2" />
              <line x1="260" y1="200" x2="285" y2="200" stroke="white" strokeWidth="2" />
            </g>
            
            {/* Front Trailer Wheel */}
            <g className="wheel">
              <circle cx="550" cy="200" r="35" fill="#0c0b0d" stroke="white" strokeWidth="2" />
              <circle cx="550" cy="200" r="10" fill="none" stroke="white" strokeWidth="2" />
              <line x1="550" y1="165" x2="550" y2="190" stroke="white" strokeWidth="2" />
              <line x1="550" y1="210" x2="550" y2="235" stroke="white" strokeWidth="2" />
              <line x1="515" y1="200" x2="540" y2="200" stroke="white" strokeWidth="2" />
              <line x1="560" y1="200" x2="585" y2="200" stroke="white" strokeWidth="2" />
            </g>

            {/* --- Trailer Connection --- */}
            {/* Mechanical Hitch */}
            <path d="M 650 170 L 680 170 L 680 190 L 700 190" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="680" cy="190" r="4" fill="#0c0b0d" stroke="white" strokeWidth="2" />
            <line x1="680" y1="190" x2="680" y2="200" stroke="white" strokeWidth="2" />
            
            {/* Power Cables / Air Lines */}
            <path d="M 650 110 Q 675 140 700 110" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 650 130 Q 675 160 700 130" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

            {/* --- Truck --- */}
            {/* Truck Body */}
            <path 
              d="M 700 200 L 900 200 L 900 130 L 850 130 L 820 50 L 700 50 Z" 
              fill="none" stroke="white" strokeWidth="2" 
            />
            {/* Truck Window */}
            <path 
              d="M 720 70 L 800 70 L 820 120 L 720 120 Z" 
              fill="none" stroke="white" strokeWidth="2" 
            />
            
            {/* --- Driver & Cabin Details --- */}
            {/* Driver Silhouette */}
            <circle cx="760" cy="90" r="10" fill="none" stroke="white" strokeWidth="2" />
            <path d="M 745 120 Q 760 100 775 120" fill="none" stroke="white" strokeWidth="2" />
            {/* Steering Wheel */}
            <line x1="785" y1="110" x2="805" y2="100" stroke="white" strokeWidth="2" />
            
            {/* Exhaust Pipe */}
            <path d="M 710 150 L 710 30 L 720 30" fill="none" stroke="white" strokeWidth="2" />
            <line x1="705" y1="40" x2="715" y2="40" stroke="white" strokeWidth="2" />
            
            {/* Door Outline */}
            <path d="M 720 120 L 720 190 L 790 190 L 790 120" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
            <line x1="730" y1="145" x2="745" y2="145" stroke="white" strokeWidth="2" />
            
            {/* Front Grill & Headlight */}
            <line x1="880" y1="145" x2="895" y2="145" stroke="white" strokeWidth="2" />
            <line x1="880" y1="160" x2="895" y2="160" stroke="white" strokeWidth="2" />
            <line x1="880" y1="175" x2="895" y2="175" stroke="white" strokeWidth="2" />
            <rect x="890" y="170" width="10" height="15" fill="white" stroke="white" strokeWidth="2" />
            {/* Light beam */}
            <path d="M 900 175 L 980 150 L 980 200 Z" fill="white" opacity="0.05" />
            
            {/* Wheels */}
            {/* Rear Wheel */}
            <g className="wheel">
              <circle cx="740" cy="200" r="35" fill="#0c0b0d" stroke="white" strokeWidth="2" />
              <circle cx="740" cy="200" r="10" fill="none" stroke="white" strokeWidth="2" />
              <line x1="740" y1="165" x2="740" y2="190" stroke="white" strokeWidth="2" />
              <line x1="740" y1="210" x2="740" y2="235" stroke="white" strokeWidth="2" />
              <line x1="705" y1="200" x2="730" y2="200" stroke="white" strokeWidth="2" />
              <line x1="750" y1="200" x2="775" y2="200" stroke="white" strokeWidth="2" />
            </g>
            
            {/* Front Wheel */}
            <g className="wheel">
              <circle cx="860" cy="200" r="35" fill="#0c0b0d" stroke="white" strokeWidth="2" />
              <circle cx="860" cy="200" r="10" fill="none" stroke="white" strokeWidth="2" />
              <line x1="860" y1="165" x2="860" y2="190" stroke="white" strokeWidth="2" />
              <line x1="860" y1="210" x2="860" y2="235" stroke="white" strokeWidth="2" />
              <line x1="825" y1="200" x2="850" y2="200" stroke="white" strokeWidth="2" />
              <line x1="870" y1="200" x2="895" y2="200" stroke="white" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
