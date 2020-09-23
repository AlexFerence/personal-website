import React from 'react';
import './App.css';
//Importing dependencies
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import NavigationBar from './Components/NavigationBar';
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
