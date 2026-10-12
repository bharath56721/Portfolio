import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="min-h-screen bg-bg-primary noise-bg">
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
