import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Footprints, X } from "lucide-react";
import { react, useState } from "react";
 import css3 from "../assets/css.svg";
 import html5 from "../assets/html.svg";
  import js from "../assets/javascript.svg";
  import reactjs from "../assets/react.svg";
  import tailwind from "../assets/tailwind.svg";
  import github from "../assets/github.svg";
  import mongodb from "../assets/mongodb.svg";
  import express from "../assets/express.svg";
  import nodejs from "../assets/node.svg";





export const About = () => {
  const [popup, setpopup] = useState(false);
  useGSAP(() => {
    gsap.from("#popup", {
      duration: 0.5,
      y: -2000,
      ease: "ease in",
    });
  }, [popup]);

  return (
    <>
      <div
        id="about"
        onClick={() => {
          setpopup(true);
        }}
        className="backdrop-blur-sm bg-slate-800/30 text-2xl flex justify-center items-center flex-col  hover:text-blue-600 select-none  "
      >
        <Footprints size={45} />
        About
      </div>
      {popup && (
        <div
          id="popup"
          className=" z-10 top-0 left-0 h-full  w-full  bg-gray-900/90 backdrop-blur-md  absolute"
        >
          {/*2. add a skills section inn left corner
        3. add acedmics and education at right */}
          <div className="max-h-full ml-6  max-w-full">
            {/* achedmics */}
            <div>
              <h1 className="uppercase font-serif text-5xl text-center font-semibold text-white ">
                academics
              </h1>
              <h1 className="text-2xl mt-5">
                B.Tech, Computer Science & Engineering
                <span className="absolute right-0">2022-2026</span>
              </h1>
              <h2>Jawaharlal Nehru College Of Technology Rewa</h2>
              <h5>CGPA: 7.39/10</h5>
              <h1 className="text-2xl mt-5">
                Senior Secondary (XII), Board Of Secondary Education Bhopal
                <span className="absolute right-0">2022</span>
              </h1>
              <h2>Neha Higher Secondary School Padariya
              </h2>
              <h5>89.2%</h5>
              <h1 className="text-2xl mt-5">
              Secondary (X), Board Of Education Bhopal
                <span className="absolute right-0">2020</span>
              </h1>
              <h2>Neha Higher Secondary School Padariya</h2>
              <h5>91%</h5>
            </div>
            {/* skills */}
            <h1 className="uppercase font-serif text-5xl text-center font-semibold text-white ">
              skills
            </h1>
            <div className="flex gap-2 ">
          
              <img src={html5} alt="html5" className=" size-16" />
              <img src={css3} alt="css3" className=" size-16" />
              <img src={js} alt="js" className=" size-16" />
              <img src={reactjs} alt="reactjs" className=" size-16" />
              <img src={tailwind} alt="tailwind" className=" size-24" />
              <img src={express} alt="express" className=" brightness-200 size-24" />
              <img src={github} alt="github" className=" size-16" />
              <img src={mongodb} alt="mongodb" className=" size-24" />
              <img src={nodejs} alt="nodejs" className=" size-24" />



         
            </div>
          </div>
          <X
            className="absolute right-0 top-0 bg-blue-500"
            onClick={() => {
              setpopup(false);
            }}
          />
        </div>
      )}
    </>
  );
};
