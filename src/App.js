import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
  <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Research />
    <Certificates />
    <Contact />
    <Footer />

  </div>
);
}

export default App;