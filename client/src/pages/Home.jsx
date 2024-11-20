import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Describe from '../components/Describe'
import Testimonials from '../components/Testimonials'
import Generate from '../components/Generate'

const Home = () => {
  return (
    <div>
      <Header />
      <About /> 
      <Describe />
      <Testimonials />
      <Generate />
    </div>
  )
}

export default Home