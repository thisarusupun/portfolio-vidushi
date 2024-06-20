import React from 'react'

function Footer() {
  return (
<div>
  <footer className="bg-black relative w-full h-[54px] flex flex-col items-center justify-center">
    <p className="text-white absolute left-[10.14vw] text-left poppins-thin text-[16px] leading-[1.75rem] tracking-normal">Copyright © 2024 <span className="font-bold">Udeshi</span>. All Rights Reserved.</p>
    <p className="text-white absolute right-[10.14vw] poppins-thin text-[16px] tracking-normal opacity-100">
      Designed & Developed by Uvexzon
    </p>
  </footer>
</div>
  )
}

export default Footer