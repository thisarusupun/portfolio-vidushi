import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link: 'about me',
      href: "./pages/About",
    },
    {
      id:2,
      link: 'resume',
      href: '../pages/Resume',
    },
    {
      id:3,
      link: 'researchers',
      href: './Researches',
    },
    {
      id:4,
      link: 'achievements',
      href: './Achievements',
    },
    {
      id:5,
      link: 'blogs',
      href: './Blogs',
    },
    {
      id:6,
      link: 'contact me',
      href: './Contact'
    },
  ]

  const social = [
    {
      id: 1,
      child:(
        <>
          <TiSocialFacebookCircular />
        </>
      ),
      href:"https://facebook.com"
      
    },
    {
      id: 2,
      child: (
        <>
          <FaInstagram />
        </>
      ),
      href:"https://instagram.com"
    },
    {
      id: 3,
      child: (
        <>
          <FaLinkedin />
        </>
      ),
      href:"https://linkedin.com",
    }
  ]

  return (
    <>
      <div className='flex justify-between items-center w-full h-20 px-4 text-[#ffffff] bg-[#001139] fixed'>
        <div>
          {/* Display the Logo */}
          <h1 className='text-3xl pl-40 ml-14 font-bold text-[#A7F0FD]'>Udeshi</h1>
        </div>

          {/* Displaying Navbar Links */}
        <ul className='hidden md:flex'>

          {links.map(({id, link, href}) => (
            <li 
              key={id}
              className='px-4 cursor-pointer capitalize font-medium text-stone-300 hover:scale-105 duration-200' >
              <a 
                href={href} 
                rel='noreferrer'>
                {link}
              </a>  
              
                
            </li>
          ))}
        </ul>

        {/* Displaying Social Media links */}
        <div className='cursor-pointer pr-40 z-10 '>
            <ul className='hidden md:flex'>
            {social.map(({id, child, href}) => (
            <li 
              key={id}
              className='px-2 cursor-pointer hover:scale-105 duration-200' >
              <a 
                href={href} 
                target='_blank'
                rel='noreferrer'>
                {child}
              </a>
            </li>
          ))}
            </ul>
          </div>

          {/* Adding hamburger Icon and cross icon for the Responsive Effect */}
        <div 
        onClick={() =>{setNav(!nav)}} 
        className='cursor-pointer pr-4 z-10 text-stone-300 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

          {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-stone-300'>

            {links.map(({id, link}) => (
                <li 
                  key={id}
                  className='px-4 cursor-pointer capitalize py-6 text-4xl' >
                    {link}
                </li>
              ))}          

            </ul>

          )}
          

      </div>
    </>  
  )
}

export default Navbar