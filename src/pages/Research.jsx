import React from 'react'

function Research() {
  return (
    <div>
      <div className="bg-[url('src/Assests/images/researchs.png')] bg-[100vw] h-[605px] overflow-hidden">
      <p className='relative text-[#90F2FF] text-center text-[16px] pt-[60px] md:pt-[120px] poppins-thin'>Researchers</p>
      <p className='relative poppins-extrathin text-[#90F2FF] text-center text-[50px] pt-[10px]'>
        <span className='font-bold'>A Summary of</span> My Researchers</p>
        <div className='relative bg-transparent top-[110px] h-[151px] w-[98.65vw]'>
              <div className='flex flex-col md:flex-row w-[98.65vw]] bg-transparent'>
                <div className='relative bg-white w-[0.073vw] h-[151px] left-[16.91vw]'></div>
                <div className='relative h-[55px] w-[4.02vw] bg-black top-[22px] left-[15.73vw]'>
                  <p className='relative top-[10px] text-center poppins-thin font-bold text-[25px] text-white'>01.</p>
                </div>
                <div className='relative left-[17.50vw] top-[-280px] md:top-[36px] w-[57.39vw] h-[55px] bg-transparent'>
                  <p className='text-white text-[18px] poppins-thin font-medium'>Full keratin hair growth oil portion: increasing the hair thickness, stringiness and depth of the follicles with peppermint extract</p>
                </div>
                <div className='relative top-[-200px] md:top-[22px]'>
                  <img src="src\Assests\images\qr.png" className="relative bg-black left-[22.411vw] w-[76px] h-[75px] md:top-[22px]"/>
                  <p className='text-white relative  left-[22.211vw] top-[32px] poppins-thin font-bold text-[16px]'>Ref. No: 119</p>
                  </div>
                
              </div>
        </div>
      </div>
    </div>
  )
}

export default Research