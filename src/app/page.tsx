import React from 'react'
import Navbar from './component/Navbar'
import Name from './component/Name'
import Products from './component/Products'
import Example from './component/Example'
import Choose from './component/Choose'
import Download from './component/Download'
import Trusted from './component/Trusted'
import Carousel from './component/Carousel'
import Work from './component/Work'
import Accordion from './component/Accordian'
import Footer from './component/Footer'

export default function page() {
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

