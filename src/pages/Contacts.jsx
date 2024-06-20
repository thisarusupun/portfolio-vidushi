import React from 'react';
import Footer from '../components/Footer';
import '../styles/styles.css'

function Contacts() {
  return (
    <div className="min-h-screen flex flex-col bg-black h-[1175px]">
      <div className="flex-1">
        <div className="bg-[url('src/images/contactus.png')] bg-[100vw] w-full h-[1175px] aspect-w-16 aspect-h-9">

          <p className='font-[poppins] text-[#90F2FF] opacity-100 text-center pt-[120px]'>Contact Me</p>
          <p className='text-center poppins-thin text-[50px] text-[#90F2FF] pt-[10px]'><span className='text-center font-[poppins] font-semibold text-[50px] text-[#90F2FF]'>Let’s</span> get in touch</p>
          <div className='absolute w-[39.23vw] h-[697px] left-[50.58vw] bg-transparent pt-[80px]'>
            
            <div className='w-[39.23vw] h-[697px] bg-[#EDF2FF]'>
             <form>
                <p className='font-[poppins] font-medium pt-[30px] text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]'>Name *</p> <br/>
             <div className='pl-[2.196vw]'>
                    <input
                     type="text"
                     id="name"
                     name="name"
// value={formData.name}
// onChange={handleChange}
                     className="text-gray-700 border-black border h-[55px] w-[34.94vw] text-[24px]"
                     required/>
             </div><br/>
                  <p className=' font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]'>Email *</p><br/>
             <div className='pl-[2.196vw]'>
                   <input
                    type="text"
                    id="email"
                    name="email"
// value={formData.name}
// onChange={handleChange}
                    className="text-gray-700 border-black border h-[55px] w-[34.94vw]  text-[24px]"
                    required/>
             </div><br/>
                  <p className=' font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px]'>Subject *</p><br/>
             <div className='pl-[2.196vw]'>
                   <input
                    type="text"
                    id="subject"
                    name="subject"
// value={formData.name}
// onChange={handleChange}
                    className="text-gray-700 border-black border h-[55px] w-[34.94vw] text-[24px]"
                    required/>
             </div><br/>
                  <p className=' font-[poppins] font-medium text-left pl-[2.196vw] text-[#00113D] opacity-1 h-[23px] pb-[20px] font-poppins'>Message *</p><br/>
             <div className='pl-[2.196vw]'>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
// value={formData.name}
// onChange={handleChange}
                    className="text-gray-700 border-black border h-[135px] w-[34.94vw] text-[24px]"
                    required/>
             </div><br/>
    <div className='flex items-center justify-center'>
  <button
     type="submit"
     className='bg-[#00113D] h-[55px] w-[9.44vw] text-white poppins-thinb  opacity-1 '>Submit</button>
  </div>
  </form>
          </div>
              </div>




<div className='absolute top-[496.09px] left-[10.175vw]'>

<div className='flex flex-row space-x-[0.75vw]'>
<svg xmlns="http://www.w3.org/2000/svg" width="28.375" height="19.154" viewBox="0 0 28.375 19.154">
  <path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,21.525V5.764q0-.027.082-.52L9.43,13.18.181,22.073a2.319,2.319,0,0,1-.109-.547ZM1.3,4.15a1.179,1.179,0,0,1,.465-.082H26.75a1.549,1.549,0,0,1,.493.082l-9.3,7.962-1.231.985-2.435,2-2.435-2-1.231-.985Zm.027,18.99,9.331-8.948,3.612,2.928,3.612-2.928,9.331,8.948a1.314,1.314,0,0,1-.465.082H1.768a1.239,1.239,0,0,1-.438-.082Zm17.786-9.96,9.249-7.935a1.633,1.633,0,0,1,.082.52V21.525a2.1,2.1,0,0,1-.082.547Z" transform="translate(-0.072 -4.068)" fill="#fff"/>
</svg>
<p className='text-white poppins-thin text-[16px]'>ebbandara199@gmail.com</p>
</div>

<div className='flex flex-row space-x-[0.75vw] pt-[25px] pb-[27px]'>
<svg xmlns="http://www.w3.org/2000/svg" width="21.174" height="21.174" viewBox="0 0 21.174 21.174">
  <path id="Icon_material-local-phone" data-name="Icon material-local-phone" d="M8.758,13.664a17.82,17.82,0,0,0,7.752,7.752L19.1,18.828a1.17,1.17,0,0,1,1.2-.282,13.418,13.418,0,0,0,4.2.671,1.18,1.18,0,0,1,1.176,1.176V24.5A1.18,1.18,0,0,1,24.5,25.674a20,20,0,0,1-20-20A1.18,1.18,0,0,1,5.676,4.5H9.793A1.18,1.18,0,0,1,10.97,5.676a13.363,13.363,0,0,0,.671,4.2,1.181,1.181,0,0,1-.294,1.2L8.758,13.664Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
</svg>
<p className='text-white poppins-thin text-[16px]'>+94710941329/+94767998070</p>
</div>

<div className='flex flex-row space-x-[0.75vw]'>
<svg xmlns="http://www.w3.org/2000/svg" width="18.994" height="27.134" viewBox="0 0 18.994 27.134">
  <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M17,3a9.49,9.49,0,0,0-9.5,9.5c0,7.123,9.5,17.637,9.5,17.637s9.5-10.514,9.5-17.637A9.49,9.49,0,0,0,17,3Zm0,12.889A3.392,3.392,0,1,1,20.389,12.5,3.393,3.393,0,0,1,17,15.889Z" transform="translate(-7.5 -3)" fill="#fff"/>
</svg>
<p className='text-white poppins-thin text-[16px]'>No. 361/4, Maligathenna, Ampitiya, Kandy, Sri Lanka</p>
</div>
</div>



        </div>
        <div className='absolute top-[689.09px] left-[10.175vw] w-[7.45vw] h-[59.83px] bg-transparent'>
               <p className='text-white  poppins-thin text-[16px] h-[23px]' >Follow me</p>
               <div className='pt-[19px]'>
               <div className='flex flex-row justify-center items-left space-x-[1.7vw]'>
               <svg xmlns="http://www.w3.org/2000/svg" width="17.942" height="17.834" viewBox="0 0 17.942 17.834">
  <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M18.5,9.534A8.971,8.971,0,1,0,8.132,18.4V12.127H5.853V9.534H8.132V7.557a3.165,3.165,0,0,1,3.388-3.49,13.806,13.806,0,0,1,2.008.175V6.449H12.4a1.3,1.3,0,0,0-1.462,1.4V9.534h2.488l-.4,2.593h-2.09V18.4A8.974,8.974,0,0,0,18.5,9.534Z" transform="translate(-0.563 -0.563)" fill="#fff"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="17.335" height="17.335" viewBox="0 0 17.335 17.335">
  <g id="Icon_ionic-logo-instagram" data-name="Icon ionic-logo-instagram" transform="translate(-4.5 -4.5)">
    <path id="Path_1" data-name="Path 1" d="M16.779,5.945A3.622,3.622,0,0,1,20.39,9.556v7.223a3.622,3.622,0,0,1-3.611,3.611H9.556a3.622,3.622,0,0,1-3.611-3.611V9.556A3.622,3.622,0,0,1,9.556,5.945h7.223m0-1.445H9.556A5.071,5.071,0,0,0,4.5,9.556v7.223a5.071,5.071,0,0,0,5.056,5.056h7.223a5.071,5.071,0,0,0,5.056-5.056V9.556A5.071,5.071,0,0,0,16.779,4.5Z" fill="#fff"/>
    <path id="Path_2" data-name="Path 2" d="M24.708,11.167a1.083,1.083,0,1,1,1.083-1.083A1.081,1.081,0,0,1,24.708,11.167Z" transform="translate(-6.846 -1.611)" fill="#fff"/>
    <path id="Path_3" data-name="Path 3" d="M15.584,12.695a2.889,2.889,0,1,1-2.889,2.889,2.892,2.892,0,0,1,2.889-2.889m0-1.445a4.334,4.334,0,1,0,4.334,4.334,4.335,4.335,0,0,0-4.334-4.334Z" transform="translate(-2.416 -2.416)" fill="#fff"/>
  </g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16.813" height="16.813" viewBox="0 0 16.813 16.813">
  <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M15.612,2.25H1.2A1.206,1.206,0,0,0,0,3.462V17.851a1.206,1.206,0,0,0,1.2,1.212H15.612a1.209,1.209,0,0,0,1.2-1.212V3.462A1.209,1.209,0,0,0,15.612,2.25ZM5.081,16.661H2.59V8.638h2.5v8.024ZM3.836,7.542A1.445,1.445,0,1,1,5.28,6.1,1.446,1.446,0,0,1,3.836,7.542Zm10.587,9.12H11.931v-3.9c0-.931-.019-2.128-1.295-2.128-1.3,0-1.5,1.013-1.5,2.06v3.971H6.646V8.638H9.037v1.1h.034a2.625,2.625,0,0,1,2.361-1.295c2.522,0,2.991,1.663,2.991,3.824Z" transform="translate(0 -2.25)" fill="#fff"/>
</svg>
</div>
</div>
            </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
