import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
