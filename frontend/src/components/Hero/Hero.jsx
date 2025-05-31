import React from 'react'
import heroImg from '../../assets/hero_components.jpg'

const Hero = () => {
  return (
    <section className='max-h-[200vh] border-b-2 border-black'>
      <div className='bg-[#D2DAFF] p-4 m-5 max-sm:flex-col flex items-center'>
        <img className='max-md:sm:size-1/2 md:size-1/2 lg:size-1/3 xl:size-3/10 max-sm:mb-5' src={heroImg} alt="heroImg" />

      <div className='sm:ml-5 text-center text-black max-sm:w-full w-[85%] lg:ml-10 flex flex-col items-center'>
          <h1 className='max-sm:text-3xl text-2xl lg:text-4xl font-bold mb-4'>
            Welcome to <span className='text-emerald-900'>RE-juvenation</span>
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
            <svg className='w-5 hover:translate-x-0.5 transition-all duration-100' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000"></path> </g></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Hero