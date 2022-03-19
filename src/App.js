import React, {useState, useEffect} from 'react';
import './App.css';
import {Landing} from './components/Landing'
import {Skills} from './components/Skills'
import { MyWork } from './components/MyWork'; 
import { MyJourney } from './components/MyJourney';
import { Contact } from './components/Contact';
import TagManager from 'react-gtm-module';

function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-FLXKHLF4MW' });
  }, []);

  return (
    <div className='main'>
      <Landing   />
      <Skills    />
      <MyWork    />
      <MyJourney />
      <Contact   />
    </div>
  );
}

export default App;
