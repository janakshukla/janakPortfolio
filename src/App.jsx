import React from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className=" min-h-screen z-30 relative   ">
      <div className=" flex justify-center    -z-10  bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:48px_48px]">
        <Container>
          <Hero />
          <Skills />
        </Container>
      </div>
    </div>
  );
};

export default App;
