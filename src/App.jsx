import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Nav from './Components/Navbar/Nav'
import He from './Components/Hero/He'
import Program from './Components/Programs/Program'
import Team from './Components/Team/Team'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Communi from './Components/Tests/Communi'
import Foot from './Components/Foot/Foot'
import Camp from './Components/Camp/Camp'

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>

      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title='Campus Photos' />
        <Campus />
        <Camp />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle="Communi" title="Remember your communi" />
        <Communi />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Foot />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
