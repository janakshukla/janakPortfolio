import React from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className=" min-h-screen z-30 relative   ">
      <div className=" flex justify-center    -z-10  bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:48px_48px]">
        <motion.div
          id="scroll-indicator"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #00ff88 50%, #0088ff 100%)",
            scaleY: scrollYProgress,
            width: 1,
            height: "100vh",
            left: 0,
            bottom: 0,
            position: "fixed",
            transformOrigin: "top",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 136, 255, 0.4)",
            filter: "blur(0.5px)",
          }}
        />
        <Container>
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default App;
