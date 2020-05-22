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
      
      <Resume></Resume>
      <Timeline></Timeline>
      <Projects></Projects>
      <About></About>
      
    </div>
 
  );
}

export default App;
