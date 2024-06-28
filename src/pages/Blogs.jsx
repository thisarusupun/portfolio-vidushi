import React from "react";
import "../styles/styles.css";

function Blogs() {
  return (
    <div
      name="blogs"
      className="bg-[url('src/Assests/images/blog.png')] h-[1425px] md:h-[782px]"
    >
      <p className="text-[#90F2FF] text-center pt-[120px] text-[16px] poppins-thin font-normal">
        Blogs
      </p>
      <div className="h-[71px] pt-[10px]">
        <p className="text-[#90F2FF] text-[50px] poppins-extrathin text-center">
          <span className="font-bold">My</span> Blogs
        </p>

        <div className="flex flex-col md:flex-row pt-[80px] space-y-5 md:space-y-0 md:space-x-[1.171vw] justify-center">
          <div className="rounded-sm hover:scale-105 duration-200 relative h-[358px] w-full md:w-[25.76vw] bg-black border border-white opacity-100 backdrop-blur-sm">
            <img
              src="src\Assests\images\blog1.png"
              alt="blog 01 image"
              className="w-full h-[250px] object-cover"
            />
            <p className="absolute text-white pl-[1.46vw] poppins-thin font-bold text-[16px] text-left top-[289px]">
              Blog 01
            </p>
            <p className="absolute text-white poppins-thin top-[317px] pl-[1.46vw] opacity-100 h-[23px]">
              Read more
            </p>
          </div>
          <div className="rounded-sm hover:scale-105 duration-200 relative h-[358px] w-full md:w-[25.76vw] bg-black border border-white opacity-100 backdrop-blur-sm mx-auto">
            <img
              src="src\Assests\images\blog2.png"
              alt="blog 02 image"
              className="w-full h-[250px] object-cover"
            />
            <p className="absolute text-white pl-[1.46vw] poppins-thin font-bold text-[16px] text-left top-[289px]">
              Blog 02
            </p>
            <p className="absolute text-white poppins-thin top-[317px] pl-[1.46vw] opacity-100">
              Read more
            </p>
          </div>
          <div className="rounded-sm hover:scale-105 duration-200 relative h-[358px] w-full md:w-[25.76vw] bg-black border border-white opacity-100 backdrop-blur-sm mx-auto">
            <img
              src="src\Assests\images\blog3.png"
              alt="blog 03 image"
              className="w-full h-[250px] object-cover"
            />
            <p className="absolute text-white pl-[1.46vw] poppins-thin font-bold text-[16px] text-left top-[289px]">
              Blog 03
            </p>
            <p className="absolute text-[#FFFFFF] poppins-thin top-[317px] pl-[1.46vw] opacity-100">
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
