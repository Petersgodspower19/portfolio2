import React from 'react'

import Hero from './_components/Hero'
import Navigation from './_components/Navigation'
import About from './_components/About'
import Skills from './_components/Skills'
import Experience from './_components/Experience'
import Projects from './_components/Projects'
import CTA from './_components/CTA'
import Footer from './_components/Footer'

function page() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}

export default page
