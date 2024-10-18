import { Presentation } from 'lucide-react' 
import { useState } from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { X } from 'lucide-react'

export const Projects = () => {
  const [popup, setPopup] = useState(false)
  useGSAP(() => {
    gsap.from("#popup", {
      duration: 0.5,
      y: -2000,
      ease: "ease in",
    });
  }, [popup]);
  const projects =[
    {
      title: "Project 1",
      description: "This is a description of project 1",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      codelink:"https://www.google.com"
    },
    {
      title: "Project 2",
      description: "This is a description of project 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
       codelink:"https://www.google.com"
    },
    {
      title: "Project 2",
      description: "This is a description of project 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
       codelink:"https://www.google.com"
    },
    {
      title: "Project 2",
      description: "This is a description of project 2",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
       codelink:"https://www.google.com"
    }
  ];
  const miniprojects =[
    {
      title:"project 1",
      link:"https://www.google.com",
    },
    {
      title:"project 1",
      link:"https://www.google.com",
    },
    {
      title:"project 1",
      link:"https://www.google.com",
    }]

  return (
    <>
    <div  id="projects" className="backdrop-blur-sm bg-slate-800/30 text-2xl flex justify-center items-center hover:text-blue-600 flex-col select-none" onClick={()=>{
      setPopup(true)
    }} ><Presentation size={45} />Projects
    

    </div>
    {popup && (
        <div
          id="popup"
          className=" z-10 top-0 left-0 h-full  w-full flex  bg-gray-900/90 backdrop-blur-md  absolute"
        >
        {/* left div */}
        <div className='h-full w-3/4 grid md:grid-cols-3 md:grid-rows-2 gap-2 ' >
        {
          projects.map((project, index) => (
           <div key={index} className='mx-2 bg-gray-950/10 rounded-xl overflow-hidden backdrop-blur-md' >
            <div className='w-full h-1/2 overflow-hidden' ><img src={project.image} alt="" className='object-fit w-full' /></div>
            <div>
              <div>
                <h1 className='font-semibold text-xl' >{project.title}</h1>
                <p className='text-[0.7rem]' >{project.description}</p>
              </div>
              <div className='flex justify-between m-1 my-14 '>
                <button className='bg-blue-600 text-white py-2 px-3 rounded-sm hover:bg-blue-800' onClick={()=>{
                  window.open(project.link)
                
                }}  >code</button>
                <button className='bg-blue-600 text-white py-2 px-3 rounded-sm hover:bg-blue-800' onClick={()=>{
                  window.open(project.codelink)
                }} >live</button>
              </div>
            </div>
           
           </div>
           
          ))
        }
        </div>
        {/* right div */}
        <div className='h-full w-1/4' >
        {
          miniprojects.map((project, index) => (
            <div key={index} className='bg-gray-950/10 rounded-xl flex justify-between m-2 p-2' >
              <h1 className='font-semibold text-xl' >{project.title}</h1>
              <button className='bg-blue-600 text-white py-2 px-3 rounded-sm hover:bg-blue-800' onClick={()=>{
                  window.open(project.link)
                
                }}  >code</button>
            </div>
          ))
        
        }
        </div>
          <X
            className="absolute right-0 top-0 bg-blue-500"
            onClick={() => {
              setPopup(false);
            }}
          />
        </div>
      )}
    </>
  )
}