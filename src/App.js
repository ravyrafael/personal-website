import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Projects from './components/Projects';


const App = () => {
  

  return (
    <div>
      <Header> </Header>
      <About></About>
      <Resume></Resume>
      <Timeline></Timeline>
      <Projects></Projects>
    </div>
 
  );
}

export default App;
