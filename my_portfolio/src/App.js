import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portrait from './Assets/portrait.png';
import githubLogo from './Assets/githubLogo.png';
import linkedinLogo from './Assets/linkedinLogo.png';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
