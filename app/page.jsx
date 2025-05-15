import About from './about/page'
import Hero from './components/Hero'
import Contact from './contact/page'
import React from 'react'

const Home = () => {
  return (
    <div>
    <Hero/>
    <div className='xl:hidden'>
      <About/>
      <Contact/>
    </div>
    </div>
  )
}

export default Home;