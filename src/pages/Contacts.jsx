import React from 'react';
import Footer from '../components/Footer';
import '../styles/styles.css'

function Contacts() {
  return (
    <div className="min-h-screen flex flex-col bg-black h-[1175px]">
      <div className="flex-1">
        <div className="bg-[url('src/images/contactus.png')] bg-cover bg-center w-full h-[1175px] aspect-w-16 aspect-h-9">
          <p className='font-[poppins] text-[#90F2FF] opacity-100 text-center pt-[120px]'>Contact Me</p>
          <p className='text-center poppins-thin text-[50px] text-[#90F2FF] pt-[10px]'><span className='text-center font-[poppins] font-semibold text-[50px] text-[#90F2FF]'>Let’s</span> get in touch</p>
          <div className='w-[39.23vw] h-[697px] pl-[50.58vw] bg-transparent pt-[80px]'>
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
className='bg-[#00113D] h-[55px] w-[9.44vw] text-white font-[poppins] font-extralight  opacity-1 '>Submit</button>
  </div>


</form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
