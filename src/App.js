import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';


function App() {
  return (
    <div className="App">
     <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />    
        <Word />
      </div>
    </div>
  );
}

export default App;
