import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Experience from './components/Experience/Experience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx'

function App() {
  return (
    <main className='max-w-7xl m-auto'>
        {/* <div className='min-h-screen mx-0 sm:mx-3 md:mx-5'> */}
          <Navbar />
          <Hero />
        {/* </div> */}
        {/* <Projects /> */}
        <TechStack />
        <Experience />
        <ContactMe />
    </main>
  );
}

export default App;