import React from 'react'
import heroImg from '../../assets/hero_components.jpg'

{/*97BE5A*/}
const Hero = () => {
  return (
    <section className='max-h-screen min-h-fit'>
      <div className='bg-[#FFD1D1] p-4 m-5 max-sm:flex-col flex items-center'>
        <img className='max-md:sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-3/10 max-sm:mb-5' src={heroImg} alt="heroImg" />

      <div className='sm:ml-5 text-center text-black max-sm:w-full w-[85%] lg:ml-10 flex flex-col items-center'>
          <h1 className='max-sm:text-3xl text-2xl lg:text-4xl font-bold mb-4'>
            Welcome to <span className='text-emerald-700'>E-cycle</span>
          </h1>
          <div className='sm:text-lg md:text-xl max-sm:text-lg mb-6'>
            <p>
            Analyze. Reuse. Rejuvenate.
            </p>

            <p>
              Breathe a second life into your old hardware. Upload diagnostics and get smart suggestions for reuse.
            </p>

            <p>
              Check out the coming soon section for upcoming integration of generative AI capabilities and much more.
            </p>
          </div>

          {/* Upload Button */}
          <div className='flex gap-4 max-lg:flex-col'>
            <label className='bg-violet-600 font-semibold text-white px-6 py-2 rounded-full cursor-pointer'>
            Upload Component
            <input type='file' className='hidden'/>
          </label>

          <button className='btn bg-pink-600 text-[16px] font-semibold text-white rounded-full border-none'>
            Coming Soon
            <svg className='w-5 animate-bounce inline-block iconify iconify--noto' viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M116 4H12c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8z" fill="#427687"> </path> <path d="M109.7 4H11.5C7.4 4 4 7.4 4 11.5v97.9c0 4.2 3.4 7.5 7.5 7.5h98.1c4.2 0 7.5-3.4 7.5-7.5V11.5c.2-4.1-3.3-7.5-7.4-7.5z" fill="#8cafbf"> </path> <path d="M80.6 37l24 24c1.8 1.6 1.8 4.4 0 6l-24 24c-2.6 2.3-6.6.4-6.6-3V74c0-1.1-.9-2-2-2H26c-2.2 0-4-1.8-4-4v-8c0-2.2 1.8-4 4-4h46c1.1 0 2-.9 2-2V40c0-3.4 4.1-5.3 6.6-3z" fill="#fafafa"> </path> <g> <path d="M39.7 12.9c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6z" opacity=".5" fill="#b4e1ed"> </path> </g> </g></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Hero