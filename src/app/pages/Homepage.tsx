import React from 'react'
import Navbar from '../component/Navbar'
import Name from '../component/Name'
import Products from '../component/Products'
import Download from '../component/Download'
import Choose from '../component/Choose'
import Example from '../component/Example'
import Work from '../component/Work'
import Trusted from '../component/Trusted'
import Carousel from '../component/Carousel'
import Accordion from '../component/Accordian'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Name/>
      <Products/>
      <Download/>
      <Choose/>
      <Example/>
      <Work/>
      <Trusted/>
      <Carousel/>
      <Accordion/>
      <Footer/>
    </div>
  )
}