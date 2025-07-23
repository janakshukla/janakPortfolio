import React from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div class="fixed inset-0 h-svh w-svw  bg-[#0c0b0d] ">
      <div class="absolute flex justify-center items-center inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:48px_48px]">
        <Container>
          <Hero />
        </Container>
      </div>
    </div>
  );
};

export default App;
