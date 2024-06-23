import React from 'react';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';

function App() {
  return (
    <main className='max-w-6xl m-auto'>
      <section className='min-h-screen'>
        <Navbar />
        <AboutMe />
        <Projects />
        <TechStack />
      </section>
    </main>
  );
}

export default App;