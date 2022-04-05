import React, { useEffect } from 'react';
import About from './components/About';
import Card from './components/Card';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Contact from './components/Contact';
import aos from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    aos.init({
      once: true,
    });
  });

  return (
    <div className="min-h-screen bg-black py-10 px-3 sm: px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay>
        <About />
      </div>

      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
