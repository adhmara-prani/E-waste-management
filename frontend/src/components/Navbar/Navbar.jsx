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
    <div className="hidden sm:flex navbar h-10 w-full shadow-md ">
            {/*left half*/}
            <div className='flex ml-5 items-center'>
                <img className='max-sm:size-12 sm:max-lg:size-13 lg:size-14 cursor-pointer' src={logo} alt="my_logo" />
                {/* <span className='text-black ml-5'>RE-juvenation</span> */}
            </div>

            {/*right half */}
            <div className="flex items-center gap-5 ml-auto mr-5 text-black font-medium">
              <ul className="flex gap-7">
                <li className='cursor-pointer'><a>My Dashboard</a></li>
                <li className='cursor-pointer'><a>Pricing</a></li>
                <li className='cursor-pointer'><a>About</a></li>
              </ul>

              <div>
                <button className="btn text-black w-35 bg-[#EEF1FF] hover:text-white hover:bg-gradient-to-b hover:from-indigo-400 hover:to-purple-400 transition duration-250">Get Started</button> {/* Use hamburger below sm width */}
              </div>
            </div>
        </div>

    <div className='flex sm:hidden navbar h-10 bg-base-100'>
      <div>
        <img onClick={toggleMenu} className='size-10 cursor-pointer stroke-black' src={open ? closeIcon : hamIcon} alt="hamburger" />
      </div>

      {open && (
        <div className='absolute mt-82 w-[96%] text-black font-semibold z-1 bg-[#EEF1FF] p-4 rounded-xl'>

          <ul className='flex items-center justify-center gap-10 flex-col'>
            <li className='cursor-pointer'><a>My Dashboard</a></li>
            <li className='cursor-pointer'><a>Pricing</a></li>
            <li className='cursor-pointer'><a>About</a></li>

            <button type='button' className='w-full btn text-black bg-[#EEF1FF] hover:text-white hover:bg-gradient-to-b hover:from-indigo-400 hover:to-purple-400 transition duration-250'>Get Started</button>
          </ul>

        </div>
      )}
    </div>
  </nav>
    
//     <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="font-semibold text-xl ml-2">RE-juvination</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//   ) GENERIC DAISY UI NAVBAR
)}

export default Navbar