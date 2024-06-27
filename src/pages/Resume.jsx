import React from 'react'
// import CV from '/Public/CV.pdf'

const Resume = () => {

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
    <div name='Resume' className='bg-[url(src/Assests/images/resume.png)] w-full h-auto text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen md:min-h-screen'>
        <div className='pb-8'>
          <p className='poppins-thin font-sans text-[#A7F0FD] text-center mt-10 text-sm'>Resume</p>
          <p className='text-[#A7F0FD] text-[50px] poppins-thin text-center text-4xl font-thin py-6'><span className='text-[50px] text-4xl font-bold'>A Summary of </span>My Resume</p>
        </div>
    
        <div className='flex mt-4'>
            {/* left column */}
            <div className='w-1/2 pr-4'>
              <p className=' poppins-thin text-3xl font-light  text-stone-200' >My Education</p>
              <div className='flex flex-col'></div>
              <div className='h-max border-l border-gray-200 mt-7'>
                  <div>
                      <p className='mt-10 ml-6 text-[#A7F0FD] text-lg poppins-thin'>English Diploma</p>
                      <p className='mb-6 mt-1 ml-6 font-thin text-sm flex justify-between poppins-thin'>IBS Campus, Kandy <span className='text-right mr-6'>Feb 2012</span></p>
                      <hr className='mx-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin '>BSc in  Chemisrty</p>
                      <p className='mt-1 ml-6 text-sm font-thin flex justify-between poppins-thin'>The Open University, Polgolla, Kandy <span className='text-right mr-6'>Feb 2017 - Feb 2022</span></p>
                      <hr className='mx-6 my-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>BSc in Organic Chemisrty</p>
                      <p className='mt-1 ml-6 text-sm font-thin mb-6 flex justify-between poppins-thin'>University of Colombo <span className='text-right mr-6'>Apr 2022</span></p> 
                      <p className='ml-6  text-sm text-stone-200 poppins-thin leading-[30px]'>Completed subjects as advance organic chemistry <br /> spectroscopy, polymer, textile, biosynthesis, of natural products <br />medical chemistry, brewery, environmental chemistry <br />cosmetics, plastics in chemistry, paint, bio chemistry, rubber <br />quality controls and standards. Proceeding the postgraduate <br />research</p>
                      <hr className='mx-6 my-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Completed my own research and <br />invention of new chemical hair growth formula</p>
                      <p className='mt-1 ml-6 text-sm font-thin mb-6 flex justify-between poppins-thin'>National Institute of Fundamental <br />Studies (NIFS), Kandy <span className='text-right mr-6'>Aug 2021 - Oct 2021</span></p>
                      <p className='ml-6  text-sm text-stone-200 poppins-thin leading-[30px]'>My research won the young scientist competition at NIFS and <br />was selected for their journal. Further research and the <br />investigation will continue. I have research publications on <br />journals</p>
                      {/* <hr className='mx-6 my-6'/> */}
                  </div>
              </div>
   
            </div>

          <div className='w-1/2 pr-4'>
              <p className='text-3xl font-light  text-stone-200 poppins-thin' >My Experience</p>
              <div className='flex flex-col'></div>
              <div className='h-max border-l border-gray-200 mt-7'>
                  <div>
                      <p className='mt-10 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Teacher /Lecturer</p>
                      <p className='ml-6 my-6 text-sm text-stone-200 poppins-thin leading-[30px]'>Present self work (tuitions), more than 8 years' experience in <br />teaching from high school level (Science, English and <br />Mathematics, Chemistry and Physics including district ranks) <br />to undergraduate and post graduate levels (chemistry <br />subjects, statics, physics)in Cambridge and Edexcel <br />syllabus and local syllabus</p>
                      <hr className='mx-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Practical Conductor</p>
                    <p className='mt-1 ml-6 text-sm font-thin mb-6 poppins-thin'>The Open University, Polgolla, Kandy</p>
                    <p className='ml-6 my-6 text-sm text-stone-200 poppins-thin leading-[30px]'>Pass programmer in the university of junior students. Lab <br />session conductor and instructor</p>  
                    <hr className='mx-6 my-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Guest Lecturer</p>
                    <p className='ml-6  text-sm text-stone-200 poppins-thin leading-[30px]'>Guest lecturer for chemistry and physics student in a <br />Moldavian institution</p>
                      <hr className='mx-6 my-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Chemistry Magazine, books writer and editor</p>
                      <p className='mt-1 ml-6 text-sm font-thin mb-6 poppins-thin '>Anusha Publications, Galoya, Kandy</p>
                      <p className='ml-6  text-sm text-stone-200 poppins-thin'>Chemistry magazine writer and Editor. Chemistry book writer</p>
                      <hr className='mx-6 my-6'/>
                  </div>

                  <div>
                    <p className='mt-6 ml-6 text-[#A7F0FD] text-lg poppins-thin'>Volunteer Researcher</p>
                    <p className='ml-6  text-sm text-stone-200 poppins-thin leading-[30px]'>I am a volunteer researcher at NIFS under the guidance of <br />Prof. Lalith Jayasinghe as my supervisor in Natural Products <br />of chemistry</p>
                  </div>
              </div>
   
            </div>

        </div>
        <button onClick={onButtonClick} className='bg-[#001139] px-6 py-3 my-8 mx-auto flex items-center hover:scale-105 duration-200 font-bold poppins-thin'>Download <span className='font-thin'> My Resume</span> </button>

        
      </div>
    </div>
  )
}

export default Resume