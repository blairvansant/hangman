import { React, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
// let playable = true; refactored to line 16 
// const correctLetters = []; refactored to line 17
// const wrongLetters = []; refactored to line 18
function App() {
  const [ playable, setPlayable ] = useState(true);
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState=([]);

  return (
    <div className="App">
     <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />    
        <Word />
        <Popup />
        <Notification />
      </div>
    </div>
  );
}

export default App;
