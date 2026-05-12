import React, { useEffect } from 'react'; // Added useEffect here
import { ThemeProvider }  from './context/ThemeContext';
import Navbar             from './components/Navbar';
import Hero               from './components/Hero';
import About              from './components/About';
import Experience         from './components/Experience';
import Education          from './components/Education';
import Skills             from './components/Skills';
import Projects           from './components/Projects';
import Certifications     from './components/Certifications';
import Contact            from './components/Contact';
import Footer             from './components/Footer';

// Important: Use the path relative to where App.jsx is. 
// If App.jsx is in /src and llogo.png is in /public, use this:
import favicon from '/llogo.png'; 

function Portfolio() {
  return (
    <div className="relative min-h-screen noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  // This hook will now run correctly and force the favicon change
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = favicon;
    } else {
      // If no link tag exists yet, create one
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}