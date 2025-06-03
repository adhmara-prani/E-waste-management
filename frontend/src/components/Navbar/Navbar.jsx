import React from 'react'
import logo from '../../assets/logo.svg'
import hamIcon from '../../assets/hamburger-menu.svg'
import closeIcon from '../../assets/closeIcon.svg'
import { useState } from 'react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
  <nav>
    {/* Web Navbar */}
    <div className="hidden sm:flex navbar h-10 w-full shadow-md ">
            {/*left half*/}
            <div className='flex ml-5 items-center'>
                <img className='max-sm:size-12 sm:max-lg:size-13 lg:size-14 cursor-pointer' src={logo} alt="my_logo" />
            </div>

            {/*right half */}
            <div className="flex items-center gap-5 ml-auto mr-5 text-black font-medium">
              <ul className="flex gap-7">
                <li className='cursor-pointer'><a>My Dashboard</a></li>
                <li className='cursor-pointer'><a>Pricing</a></li>
                <li className='cursor-pointer'><a>About</a></li>
              </ul>

              <button className="btn text-white w-35 bg-pink-400 hover:bg-gradient-to-t hover:from-pink-400 hover:to-purple-400 transition duration-250">
                Get Started
              </button> {/* Use hamburger below sm width */}
            </div>
      </div>


    {/* Mobile Navbar */}
    <div className="flex sm:hidden items-center justify-between p-4 shadow-md h-14">
  {/* Hamburger Icon */}
  <img
    onClick={toggleMenu}
    className="size-10 cursor-pointer"
    src={open ? closeIcon : hamIcon}
    alt="hamburger"
  />

  {/* Sliding Sidebar Menu */}
  <div
    className={`fixed top-0 left-0 h-full w-4/5 bg-white z-50 transform ${
      open ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out shadow-lg`}
  >
    <div className="flex justify-end p-4">
      <img
        onClick={toggleMenu}
        className="size-8 cursor-pointer"
        src={closeIcon}
        alt="close"
      />
    </div>
    <ul className="flex flex-col gap-20 text-xl items-center text-black font-medium mt-10">
      <li className="cursor-pointer"><a>My Dashboard</a></li>
      <li className="cursor-pointer"><a>Pricing</a></li>
      <li className="cursor-pointer"><a>About</a></li>
      <button
        type="button"
        className="w-2/3 btn text-white bg-pink-400 hover:bg-gradient-to-t hover:from-pink-400 hover:to-purple-400 transition duration-250"
      >
        Get Started
      </button>
    </ul>
  </div>
</div>

  </nav>

)}

{/* {open && (
        <div className='absolute mt-82 w-[96%] text-black font-semibold z-1 bg-[#EEF1FF] p-4 rounded-xl'>

          <ul className='flex items-center justify-center gap-10 flex-col'>
            <li className='cursor-pointer'><a>My Dashboard</a></li>
            <li className='cursor-pointer'><a>Pricing</a></li>
            <li className='cursor-pointer'><a>About</a></li>

            <button type='button' className='w-full btn text-black bg-[#EEF1FF] hover:text-white hover:bg-gradient-to-b hover:from-indigo-400 hover:to-purple-400 transition duration-250'>Get Started</button>
          </ul>

        </div>
)} */}

export default Navbar