import React from 'react';
import i18n from './i18n/config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import WhatIsJhatka from './components/WhatIsJhatka';
import Stats from './components/Stats';
import WhyJhatka from './components/WhyJhatka';
import VideoSection from './components/VideoSection';
import Events from './components/Events';
import Scripture from './components/Scripture';
import Appeals from './components/Appeals';
import MalharCertification from './components/MalharCertification';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee />
      <Gallery />
      <WhatIsJhatka />
      <Stats />
      <WhyJhatka />
      <VideoSection />
      <Events />
      <Scripture />
      <Appeals />
      <MalharCertification />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;