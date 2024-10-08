import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Experience from './components/Experience/Experience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <main className='max-w-7xl m-auto'>
        <Navbar />
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <ContactMe />
        <Footer />
    </main>
  );
}

export default App;