import { Footprints, X } from "lucide-react";
import { useState } from "react";
import css3 from "../assets/css.svg";
import html5 from "../assets/html.svg";
import js from "../assets/javascript.svg";
import reactjs from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import nodejs from "../assets/node.svg";
import prisma from "../assets/prisma.svg";
import Nextjs from "../assets/nextjs.svg";

const About = () => {
  const [popup, setpopup] = useState(false);

  return (
    <>
      <div
        id="popup"
        className="h-[100dvh] text-white   md:h-full  md:w-full  bg-gray-900 md:bg-opacity-90 backdrop-blur-md  absolute"
      >
        <div className="max-h-full ml-6 md:ml-6  max-w-full">
          {/* achedmics */}
          <div className="">
            <h1 className="uppercase text-2xl font-serif md:text-5xl text-center font-semibold text-white ">
              academics
            </h1>
            <h1 className="md:text-2xl text-wrap md:mt-5">
              B.Tech, Computer Science & Engineering
              <span className="absolute hidden md:block right-0">
                2022-2026
              </span>
            </h1>
            <h2>Jawaharlal Nehru College Of Technology Rewa</h2>
            <h5>CGPA: 7.39/10</h5>
            <h1 className="md:text-2xl  text-wrap md:mt-5">
              Senior Secondary (XII), Board Of Secondary Education Bhopal
              <span className="absolute hidden md:block right-0">2022</span>
            </h1>
            <h2>Neha Higher Secondary School Padariya</h2>
            <h5>89.2%</h5>
            <h1 className="md:text-2xl  text-wrap md:mt-5">
              Secondary (X), Board Of Education Bhopal
              <span className="absolute hidden md:block right-0">2020</span>
            </h1>
            <h2>Neha Higher Secondary School Padariya</h2>
            <h5>91%</h5>
          </div>
          {/* skills */}
          <h1 className="uppercase font-serif md:text-5xl text-center font-semibold text-2xl text-white ">
            skills
          </h1>
          <div className="flex flex-wrap gap-2 ">
            <img src={Nextjs} alt="Nextjs" className=" size-16" />
            <img src={prisma} alt="prisma" className=" size-16" />
            <img src={nodejs} alt="nodejs" className=" size-16" />
            <img src={reactjs} alt="reactjs" className=" size-16" />
            <img src={tailwind} alt="tailwind" className=" size-16" />
            <img src={mongodb} alt="mongodb" className=" size-16" />
            <img
              src={express}
              alt="express"
              className=" brightness-200 size-16"
            />
            <img src={github} alt="github" className=" size-16" />
            <img src={js} alt="js" className=" size-16" />
            <img src={css3} alt="css3" className=" size-16" />
            <img src={html5} alt="html5" className=" size-16" />
          </div>
        </div>
        <X
          className="absolute right-0 top-0 bg-blue-500"
          onClick={() => {
            window.history.back();
          }}
        />
      </div>
      )
    </>
  );
};
export default About;
