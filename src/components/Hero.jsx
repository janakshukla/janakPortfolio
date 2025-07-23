import { Github, Linkedin, Twitter } from 'lucide-react';
import img from '../assets/image.png';

const Hero = () => {
  return (
    <div>
       <div className='flex justify-between' >
       <img
        className='size-40 rounded-3xl object-cover shadow-2xl shadow-[#00000040] border-2 border-[#ffffff20] hover:scale-105 transition-all duration-500 ease-in-out' 
         src={img} 
         alt="this is hero image" />
         {/* contact section */}
         <div className='flex justify-end gap-6 '>
           <a  className='hover:bg-slate-600 p-2 rounded-2xl h-fit' href="https://github.com/janakshukla/">
            <Github className='size-6   text-white ' />
            </a>
           <a className='hover:bg-slate-600 p-2 rounded-2xl h-fit' href="https://x.com/janakshukla2004/">
            <Twitter className='size-6  text-white ' />
            </a>
           <a className='hover:bg-slate-600 p-2 rounded-2xl h-fit' href="https://www.linkedin.com/in/janak-shukla-b25808257/">
            <Linkedin className='size-6  text-white ' />
            </a>

         </div>
       </div>
        <h1 
        className=''
        >I'm Janak shukla</h1>
        <p> 20,Rewa|Fullstack Engineer </p>
        <p></p>
    </div>
  )
}

export default Hero