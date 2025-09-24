import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;