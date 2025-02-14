import { Github,Linkedin,FileUser,Instagram,Twitter } from 'lucide-react' 
import resume from '../assets/janakshukla_resume.pdf'

export const Contact = () => {
  return (
    <div id="contact"  className="backdrop-blur-sm bg-gray-900 text-2xl py-5 flex justify-center items-center select-none ">

      <div className=' md:ml-48 flex gap-8' >
      <Twitter  className='hover:text-blue-600 font-extrabold' 
     
     onClick={() => window.open('https://x.com/janakshukla2004')}
     size={45} />

      <Github className='hover:text-blue-600 ' 
     
      onClick={() => window.open('https://github.com/janakshukla')}
      size={45} />
      <Linkedin className='hover:text-blue-600 '
       onClick={() => window.open('https://www.linkedin.com/in/janak-shukla-b25808257/')}
        size={45} />
      <Instagram className='hover:text-blue-600 ' 
       onClick={() => window.open('https://www.instagram.com/janak.shukla.735/')}
        size={45} />
      <FileUser className='hover:text-blue-600 '
        
        onClick={() => window.open(resume)}
        size={45} />
      </div>
    </div>

  )
}