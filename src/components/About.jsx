import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Footprints,X } from "lucide-react";
import { react, useState } from "react";

export const About = () => {
  const [popup, setpopup] = useState(false);
  useGSAP(() => {
    gsap.from("#popup", {
      duration: 1,
      y:-2000,
      ease: "ease in",
      
    })
  },[popup])

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
        {popup && <div id="popup" className=" z-10 top-0 left-0 h-full  w-full bg-slate-700/50 backdrop-blur-md absolute" >
        {/*2. add a skills section inn left corner
        3. add acedmics and education at right */}
        <X className="absolute right-0 top-0 bg-blue-500" onClick={()=>{
          setpopup(false);
        
        }} />
        </div>}
    </>
  );
};
