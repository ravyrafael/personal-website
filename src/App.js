import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = ({saveFile}) => {
  

  return (
    <div>
      <Header> </Header>
      <About></About>
      <Resume></Resume>
      <Timeline></Timeline>
      <Projects></Projects>
      <Contact saveFile={saveFile}></Contact>
      <Footer></Footer>
      
    </div>
 
  );
}

export default App;
