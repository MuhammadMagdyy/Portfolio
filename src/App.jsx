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

function Portfolio() {
  return (
    /* noise class adds the grain texture overlay via CSS */
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
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
