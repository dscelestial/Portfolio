import React from 'react';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import TechStack from './components/TechStack.jsx';

function App() {
  return (
    <main className=' bg-white max-w-7xl m-auto'>
      <section className='min-h-screen'>
        <Navbar />
        <AboutMe />
        <TechStack />
      </section>
    </main>
  );
}

export default App;