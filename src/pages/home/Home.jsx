import React from 'react';
import Hero from './Hero';
import About from './About';
import Slick from './Slick';
import Projects from './Projects';

function Home() {
  return (
    <div className="relative z-0">
      <Hero />
      <About />
      <Slick />
      <Projects />
    </div>
  );
}

export default Home;
