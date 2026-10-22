import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      
      {/* Background — clean, minimal layers */}
      <div className="bg-grid"></div>
      <div className="bg-ambient-top"></div>
      <div className="bg-ambient-mid"></div>
      <div className="bg-ambient-bottom"></div>
      <div className="bg-vignette"></div>
      <div className="bg-spotlight"></div>
      
      {/* Content */}
      <Navbar />
      
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
