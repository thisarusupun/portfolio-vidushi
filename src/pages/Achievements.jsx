import React from 'react'
import certificates from '../Assets/Images/certificates.png'

const Achievements = () => {

  // Array  of Certificate details
  const achievements = [
    {
      id: 1,
      src: certificates,
      desc: 'Certified as a Space Defender at NASA in the USA'
    },
    {
      id: 2,
      src: certificates,
      desc: "Youth Scientists' Conference on Multidisciplinary Research - 2021"
    },
    {
      id: 3,
      src: certificates,
      desc: 'Introducing Azure Quantum Elements Accelerating scientific discovery',
    },
    {
      id: 4,
      src: certificates,
      desc: 'Using crystallographic structure and data-driven solutions to advance drug design'
    },
    {
      id: 5,
      src: certificates,
      desc: 'CO2 storage, magic doors and machinelearning'
    },
    {
      id: 6,
      src: certificates,
      desc: 'Steeped: The chemisrty of tea - with author Miclelle Franci'
    },
  ]

  return (
    <div name='Achievements' className='bg-gradient-to-b from-[#001139] via-[#001139] to-[#05174D] w-full h-auto text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen'>
        <div className='pb-8'>
          <p className='font-sans text-[#A7F0FD] text-center mt-10 text-sm'>Achievements</p>
          <p className='text-[#A7F0FD] text-center text-4xl font-thin py-6'><span className='text-4xl font-bold'>Some of my </span>Achievements</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0'>
        {
          achievements.map(({id, src, desc}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-150 w-full h-40 object-cover' />
            <div className='flex items-center justify-center py-2 px-4'>
              <p className='font-xl font-thin'>{desc}</p>
            </div>
          </div>
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Achievements