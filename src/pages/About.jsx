import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] text-stone-200 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full'>
            <div>
                <p className='font-sans text-[#A7F0FD] text-center mt-10 text-sm'>About Me</p>
                <p className=' text-[#A7F0FD] text-center text-4xl font-thin py-6'><span className='text-4xl font-bold'>Know</span> Me More</p><br />
            </div>
            <div className='flex mt20'>
              <div className="w-2/3 pr-4">
                <p className='text-4xl font-light mt-20 text-stone-200' >Hello I'm <span className='text-white font-medium'>Udeshi Harshani Bandara</span></p>
                <p className='mt-3 font-light leading-relaxed'>
                I excelled in my 13-year high school education, specializing in biology scheme and continued to pursue a double major in chemistry and physics during the undergraduate degree. I conducted groundbreaking research leading to a published papers, international conferences and presentations. Currently working on the research part and already completed the theoretical part in MSc of Applied Organic Chemistry. I have over 5 years of experience in statistical analysis and research and development. With 8 years of reaching and lecturing experiences from high school to postgraduate levels students all over the world. Specially my goal is to drive innovation and contribute to research and development as a scientist.
                </p>
              </div>
              {/* Right Column stuff */}
              <div className="w-1/3 pl-4 rounded-md flex items-center justify-center ">
              <p className="mt-20 text-9xl font-normal text-white text-center leading-10">10 + <span className='text-xl font-normal text-stone-200'>Years of Experience</span> </p>

            </div>
            </div>

            
        </div>
    </div>
  )
}

export default About