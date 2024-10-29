import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import image from "./assets/janak2.jpg";
import Intro from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  useGSAP(() => {
    gsap.from("#intro", {
      duration: 2,
      x: -2000,
      ease: "power3.inOut",
      repeatRefresh: true,
      yoyo: true,
      stagger: 4,
      rotate: 360,
      delay: 2,
    });
    gsap.from("#about", {
      duration: 2,
      x: 2000,
      ease: "power3.inOut",
      rotate: 360,
      delay: 2,
    });
    gsap.from("#projects", {
      duration: 2,
      y: -2000,
      ease: "power3.inOut",
      rotate: 360,
      delay: 2,
    });
    gsap.from("#contact", {
      duration: 2,
      y: 2000,
      ease: "power3.inOut",
      rotate: 360,
      delay: 2,
    });
    gsap.to("#slider", {
      duration: 4,
      y: -2000,
      ease: "power3.inOut",
      repeatRefresh: true,
      yoyo: true,
    });
  });

  return (
    <div className="bg-gray-900 h-[100dvh] w-[100dvw] text-white flex justify-center items-center overflow-hidden ">
      {/* a sliding screen for intro */}
      <div
        id="slider"
        className="relative h-screen w-[100dvw] bg-slate-950 md:overflow-hidden flex justify-center items-center uppercase font-serif font-bold text-6xl md:text-9xl "
      >
        welcome
      </div>
      {/* 1. add a big div 
          2.do 6 part of it
          3. add 4 divs 
          4.animate them */}
      <div className=" h-5/6 w-5/6 md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-3 absolute">
        <Intro image={image} />
        <About />
        <Projects/>
        <Contact />
       
      </div>
    </div>
  );
};

export default App;
