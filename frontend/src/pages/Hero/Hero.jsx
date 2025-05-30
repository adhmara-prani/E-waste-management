import React from 'react'
import heroImg from '../../assets/hero_components.jpg'

const Hero = () => {
  return (
    <div>
      <div className='bg-[#E4F9F5] p-4 shadow-xl hover:scale-99 transition-all duration-300 shadow-emerald-700 mt-5 flex items-center'>
        <img className='size-fit max-md:sm:size-1/2 md:size-1/2 lg:size-1/3 xl:size-3/10' src={heroImg} alt="heroImg" />

        {/* <div className='max-sm:absolute max-lg:w-1/2 lg:w-4/5 text-center text-black font-semibold text-[25px]'>
          <span>Welcome to RE-juvenation</span>
        </div>
      </div> */}

      <div className='max-sm:absolute text-center w-[90%] lg:ml-10 flex flex-col items-center'>
          <h1 className='text-3xl max-sm:text-white md:text-4xl font-bold text-black mb-4'>
            Welcome to <span className='text-emerald-400'>RE-juvenation</span>
          </h1>

          <p className='text-lg max-sm:text-white md:text-xl max-sm:text-lg text-gray-700 mb-6'>
            Analyze. Reuse. Rejuvenate.
          </p>

          {/* Upload Button */}
          <label className='bg-sky-500 font-semibold text-white px-6 py-2 rounded-full cursor-pointer hover:bg-sky-600 transition duration-300'>
            Upload Component
            <input type='file' className='hidden' />
          </label>
        </div>
      </div>
    </div>
  )
}



// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* Left Text Section */}
//         <div>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             RE-juvination ♻️
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-600">
//             Give your old hardware a second life. Upload diagnostics and get smart reuse, recycle, or upgrade suggestions — sustainably and intelligently.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-4">
//             <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow flex items-center">
//               Upload Report
//             </button>
//             <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50">
//               See How It Works
//             </button>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex justify-center">
//           <img
//             src="/hero-illustration.png"
//             alt="Reuse old PC components"
//             className="w-full max-w-md md:max-w-lg h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


export default Hero