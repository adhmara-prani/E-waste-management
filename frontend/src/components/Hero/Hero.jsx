import React from 'react'
import heroImg from '../../assets/hero_components.jpg'

// bg-[#E4F9F5]
const Hero = () => {
  return (
    <section>
      <div className='bg-[#D2DAFF] p-4 m-5 flex items-center'>
        <img className='w-auto h-auto max-md:sm:size-1/2 md:size-1/2 lg:size-1/3 xl:size-3/10' src={heroImg} alt="heroImg" />

      <div className='sm:ml-5 max-sm:absolute max-sm:mt-260 text-center w-[85%] lg:ml-10 flex flex-col items-center'>
          <h1 className='text-3xl max-sm:text-white md:text-4xl font-bold text-black mb-4'>
            Welcome to <span className='text-emerald-900'>RE-juvenation</span>
          </h1>

          <p className='text-[16px] max-sm:text-white md:text-xl max-sm:text-lg text-gray-700 mb-6'>
            Analyze. Reuse. Rejuvenate. <br />
            Breathe a second life into your old hardware. Upload diagnostics and get smart suggestions for reuse. <br />
            Check out the coming soon section for upcoming integration of generative AI capabilities and much more.
          </p>

          {/* Upload Button */}
          <div className='flex gap-4 max-lg:flex-col'>
            <label className='bg-violet-600 font-semibold text-white px-6 py-2 rounded-full cursor-pointer'>
            Upload Component
            <input type='file' className='hidden'/>
          </label>

          <button className='btn bg-pink-600 text-[16px] font-semibold text-white rounded-full border-none'>Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Hero