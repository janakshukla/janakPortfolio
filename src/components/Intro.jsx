function Intro({image}) {
  return (
    <div
          id="intro"
          className="backdrop-blur-sm flex gap-x-9 flex-col items-center md:flex-row  bg-slate-800/30 col-span-3 row-span-2 "
        >
          {/* 1. add imagea at half and some other content at other half */}
          <div className="max-h-full flex md:w-1/2  overflow-hidden ">
            <img src={image} alt="photo" className="object-cover w-full hover:scale-110 transition hover:rounded-lg  " />
          </div>
          <div className="max-h-full uppercase font-semibold font-serif flex justify-center items-center text-3xl select-none md:w-1/2">
            <div className="my-12 " >
              <h1>I am   <span className="text-blue-500 font-bold font-sans" >Janak shukla</span></h1>
              <p className="mt-16  text-gray-4
              00 text-sm font-extralight text-balance">
                I am a proficient MERN stack developer with expertise in
                building full-stack web applications using MongoDB, Express.js,
                React, and Node.js. I excel in creating dynamic, scalable
                applications with strong front-end and back-end integration.
              </p>
            </div>
          </div>
        </div>
  )
}

export default Intro