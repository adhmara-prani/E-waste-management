import React from 'react'
import Hero from './pages/Hero/Hero.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

const App = () => {
  return (
    <div className='flex flex-col h-screen w-fit'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App