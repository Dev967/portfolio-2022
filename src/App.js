import React, {useEffect, useState} from 'react';
import './App.css';
import {Landing} from './components/Landing'
import {Skills} from './components/Skills'
import { MyWork } from './components/MyWork'; 
import { MyJourney } from './components/MyJourney';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';
import TagManager from 'react-gtm-module';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000)
  }, [])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-FLXKHLF4MW' });
  }, []);

  if(!loaded) return(
    <Loading />
  )

  else return (
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
