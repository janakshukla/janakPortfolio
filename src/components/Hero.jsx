import img from '../assets/image.png';

const Hero = () => {
  return (
    <div>
       <div>
       <img
        className='size-40 rounded-3xl object-cover shadow-2xl shadow-[#00000040] border-2 border-[#ffffff20] hover:scale-105 transition-all duration-500 ease-in-out' 
         src={img} 
         alt="this is hero image" />
         {/*  */}
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