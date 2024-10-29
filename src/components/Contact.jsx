import { Github,Linkedin,FileUser,Instagram } from 'lucide-react' 
import resume from '../assets/janakshukla_resume.pdf'

export const Contact = () => {
  return (
    <div id="contact"  className="backdrop-blur-sm bg-slate-800/30 text-2xl py-5  select-none ">

      <div className='md:absolute bottom-3 gap-10 flex right-3' >
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