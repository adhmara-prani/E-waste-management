import React from 'react'
import heroImg from '../../assets/hero_components.jpg'

const Hero = () => {
  const handleFileChange = (event) => {
    // Handle file upload logic here
    console.log('File selected:', event.target.files[0])
  }

  return (
    <section className='min-h-screen border-b-2 border-black'>
      <div className='bg-[#D2DAFF] p-8 m-5 rounded-2xl shadow-lg flex items-center justify-between gap-8 max-sm:flex-col'>
        <img 
          className='max-w-[500px] w-full rounded-xl shadow-md object-cover'
          src={heroImg} 
          alt="Computer components arranged on a surface"
          loading="eager"
        />

        <div className='flex-1 text-center text-black flex flex-col items-center gap-6'>
          <h1 className='text-4xl lg:text-5xl font-bold'>
            Welcome to <span className='text-emerald-900 hover:text-emerald-700 transition-colors'>RE-juvenation</span>
          </h1>

          <div className='space-y-4 text-lg lg:text-xl'>
            <p className='font-semibold text-2xl text-indigo-900'>
              Analyze. Reuse. Rejuvenate.
            </p>

            <p className='text-gray-700'>
              Breathe a second life into your old hardware. Upload diagnostics and get smart suggestions for reuse.
            </p>

            <p className='text-gray-700'>
              Check out the coming soon section for upcoming integration of generative AI capabilities and much more.
            </p>
          </div>

          <div className='flex gap-6 max-lg:flex-col w-full max-w-md'>
            <label 
              className='flex-1 bg-violet-600 hover:bg-violet-700 font-semibold text-white px-6 py-3 rounded-full cursor-pointer transition-colors duration-200 flex items-center justify-center'
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && document.getElementById('fileInput').click()}
            >
              Upload Component
              <input 
                id="fileInput"
                type='file' 
                className='hidden'
                onChange={handleFileChange}
                accept=".txt,.csv,.json"
                aria-label="Upload component diagnostics file"
              />
            </label>

            <button 
              className='flex-1 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 flex items-center justify-center gap-2'
              aria-label="View upcoming features"
            >
              Coming Soon
              <svg className='w-5 transition-transform duration-200 transform group-hover:translate-x-1' viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero