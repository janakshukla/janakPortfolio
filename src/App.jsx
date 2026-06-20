import { useState, useEffect } from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      <div className={`min-h-screen z-30 relative ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000`}>
        <div className=" flex justify-center    -z-10  bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:48px_48px]">
          {/* Elegant scroll progress curve */}
          <svg 
            className="fixed inset-0 w-full h-full pointer-events-none opacity-20 z-0"
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 -5 C 30 10, 40 20, 20 30 C 0 40, 0 10, 20 20 C 50 30, 70 40, 50 60 C 30 80, 20 40, 50 50 C 80 60, 100 70, 80 90 C 60 110, 50 70, 80 80 C 100 85, 95 95, 105 105"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <Container>
            <header>
              <Hero />
            </header>
            <main>
              <Skills />
              <Experience />
              <GithubActivity />
              <Projects />
            </main>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
};

export default App;
