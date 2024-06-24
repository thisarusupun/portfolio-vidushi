import React from 'react'

function Resume() {
 
  
  const onButtonClick = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Udeshi Bandara.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(link);
};

 
  return (
    <div>
      <div className="bg-[url('src/Assests/images/resume.png')] bg-[100vw] h-[1579px] overflow-hidden">
      <button onClick={onButtonClick}className='relative bg-[#000E31] w-[18.0087vw] h-[74px] z-50 top-[1385px] left-[41.654vw]'>
        <p className='text-white font-[16px] poppins-thin'><span className='font-bold'>Download My</span> Resume</p>
        </button> 
      <p className='text-center text-[16px] poppins-thin text-[#90F2FF] text-opacity-100 pt-[70px]'>Resume</p>
      <p className='text-center text-[50px] poppins-extrathin text-[#90F2FF] pt-[10px]'><span className='font-semibold'>A Summary of</span>  My Resume</p>
      <div className='relative left-[10.17569vw] w-[88.52430vw]'>
      <div className='flex flex-row bg-transparent h-[125px] justify-start'>
        <p className="relative text-left poppins-thinb text-white text-[25px] left-[0vw] top-[90px] font-normal">My Education</p>
        <p className="relative text-left poppins-thinb text-white text-[25px] left-[28.257vw] top-[90px] font-normal">My Experiences</p>
      </div>
      <div className='flex flex-row bg-transparent justify-start'>
        <div className='relative w-[0.073vw] h-[814px] bg-white top-[45px] left-[0vw]'></div>
        <div className='relative w-[0.073vw] h-[891px] bg-white top-[45px] left-[40.336vw]'></div>
      </div>  
      </div>
      <div>
      </div>
       <div className=' relative bottom-[840px] left-[12.079vw]'>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold '>English diploma</p>
      <div className='w-[36.676vw]'>
      <div className='flex flex-row pt-[10px] justify-between'>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>IBS CAMPUS, Kandy</p>
        <p className='poppins-thin text-white text-[16px] h-[23px] text-right'>Feb 2012</p>
      </div>
      </div>
      <div className='bg-transparent pt-[25px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold top-[25.5px] h-[28px]'>BSc in Chemistry</p>
      <div className='w-[36.676vw]'>
      <div className='flex flex-row pt-[38px] justify-between'>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>The Open University, Polgolla, Kandy</p>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>Feb 2017 - Feb 2022</p>
      </div>
      </div>
      <div className='bg-transparent pt-[25px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25px] '></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>MSc in Organic Chemistry</p>
      <div className='bg-transparent pt-[10px] '></div>
      <div className='w-[36.676vw]'>
      <div className='flex flex-row justify-between'>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>University Of Colombo</p>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>Apr 2022</p>
      </div>
      </div>
      <div className='bg-transparent pt-[20px]'></div>
      <div className='w-[36.676vw] h-[173px]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Completed subjects as advance organic chemistry, spectroscopy, polymer, textile, biosynthesis of natural products, medical chemistry, brewery, environmental chemistry, cosmetics, plastics in chemistry, paint, biochemistry, rubber, quality controls and standards. Proceeding the postgraduate research</p>
      </div>
      <div className='bg-transparent pt-[25px]'></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25px]'></div>
      <div className='w-[35.2122vw]'>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold leading-[35px]'>Completed my own research and invention of new chemical hair growth formula</p>
      <div className='bg-transparent pt-[10px] '></div>
      <div className='w-[36.676vw]'>
      <div className='flex flex-row justify-between'>
       <div className='w-[19.033vw] h-[53px]'><p className='poppins-thin text-white text-[16px] h-[23px] leading-[30px]'>National Institute of Fundamental Studies (NIFS), Kandy</p> </div>
        <p className='poppins-thin text-white text-[16px] h-[23px]'>Aug 2021 - Oct 2021</p>
      </div>
      </div>
      <div className='bg-transparent pt-[20px]'></div>
      <div className='w-[35.651vw] h-[113px]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>My research won the young scientist competition at NIFS and was selected for their journal. Further research and the investigation will continue. I have research publications on journals</p>
      </div>
      </div>
      <div className='relative left-[40.40vw]'>
        <div className='relative bottom-[807px]'>

        <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>Teacher / Lecturer</p>
        <div className='bg-transparent pt-[10px] '></div>
        <div className='w-[35.3587vw] h-[173px]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Present self work (tuitions), More than 8 years’ experience in teaching from high school level (Science, English, and Mathematics, chemistry and physics including district ranks) to undergraduate and postgraduate levels (chemistry subjects, statistics, physics) in Cambridge and Edexcel syllabus and local syllabus</p>
      </div>
      <div className='bg-transparent pt-[25.5px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25px] '></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>Practical Conductor</p>
      <div className='bg-transparent pt-[10px] '></div>
      <p className='poppins-thin text-white text-[16px] h-[23px]'>The Open University, Polgolla, Kandy</p>
      <div className='bg-transparent pt-[20px] '></div>
      <div className='w-[33.455vw] h-[53px]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Pass programmer in the university for junior students. Lab session conductor and instructor</p>
      <div className='bg-transparent pt-[25.5px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25px] '></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>Guest Lecturer</p>
      <div className='bg-transparent pt-[10px] '></div>
      <div className='h-[53px] w-[30.600vw]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Guest lecturer for chemistry and physics student in a Moldavian institution.</p>
      </div>
      <div className='bg-transparent pt-[25.5px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25px] '></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>Chemistry magazine, books writer and editor</p>
      <div className='bg-transparent pt-[10px] '></div>
      <p className='poppins-thin text-white text-[16px] h-[23px]'>Anusha Publications, Gelioya, Kandy</p>
      <div className='bg-transparent pt-[20px] '></div>
      <div className='h-[23px] w-[34.9926vw]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Chemistry magazine writer and Editor. Chemistry book writer</p>
      </div>
      <div className='bg-transparent pt-[25px] '></div>
      <div className='w-[36.676vw] h-[0.5px] bg-white'></div>
      <div className='bg-transparent pt-[25.5px] '></div>
      <p className=' relative text-[#90F2FF] poppins-thin text-[20px] text-left font-bold'>Volunteer Researcher</p>
      <div className='bg-transparent pt-[10px] '></div>
      <div className='h-[83px] w-[34.1874vw]'>
      <p className='poppins-thinb text-white text-[16px] leading-[30px]'>Chemistry magazine writer and Editor. Chemistry book writer</p>
      </div>
     
      </div> 
        </div>
      </div>
      </div>
      </div>
    </div>
    
  )
}

export default Resume