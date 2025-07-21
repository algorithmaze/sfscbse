import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Activities } from './pages/Activities';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { CBSEDisclosure } from './pages/CBSEDisclosure';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-700 to-red-800 relative overflow-x-hidden">
        <AnimatedBackground />
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cbse-disclosure" element={<CBSEDisclosure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;