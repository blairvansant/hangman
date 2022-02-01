import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';

function App() {
  return (
    <div className="App">
     <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />    
      </div>
    </div>
  );
}

export default App;
