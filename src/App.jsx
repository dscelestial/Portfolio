import React from 'react';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';
import Contacts from './components/Contacts.jsx';

function App() {
  return (
    <main className='max-w-7xl m-auto'>
        <div className='min-h-screen mx-0 sm:mx-3 md:mx-5'>
          <Navbar />
          <AboutMe />
        </div>
        <Projects />
        <TechStack />
        <Contacts />
    </main>
  );
}

export default App;