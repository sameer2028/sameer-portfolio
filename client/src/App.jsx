import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profiles from './components/Profiles';

// We create a single "Landing Page" component that stacks everything
const LandingPage = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Profiles />
    <Contact />
  </main>
);

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-cyan-500/30">
      <Navbar />
      <Routes>
        {/* The main "/" route now scrolls through everything */}
        <Route path="/" element={<LandingPage />} />
        
        {/* You still have separate URLs if someone links directly to them */}
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/profiles" element={<Profiles />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;