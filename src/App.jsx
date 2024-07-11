import React from 'react';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';

function App() {
  return (
    <main className='max-w-7xl m-auto'>
      <section>
        <div className='min-h-screen'>
          <Navbar />
          <AboutMe />
        </div>
        
        <Projects />
        <TechStack />
      </section>
    </main>
  );
}

export default App;