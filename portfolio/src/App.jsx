import React from 'react'
import Headers from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-auto max-w-8xl items-center px-auto py-4 mt-1 lg:px-10'>
      <Headers />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Footer />
      
      
    </div>
  )
}

export default App
