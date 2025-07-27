import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import Services from './components/Services';
import Partners from './components/Partners';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navigation />
      <Hero />
      <MissionVision />
      <CoreValues />
      <Services />
      <Partners />
      <Team />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;