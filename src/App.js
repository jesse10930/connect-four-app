import React, {useState} from 'react';
import MainMenu from './components/MainMenu';
import GamePlay from './components/GamePlay';
import './App.scss';

const App = () => {
  const [started, setStarted] = useState(false);

  const gameStartStop = () => {
    setStarted(!started);
  }

  return (
    <div className="main-app">
      {!started ? (
        <MainMenu gameStartStop={gameStartStop}/>
      ) : (
        <GamePlay gameStartStop={gameStartStop}/>
      )}
    </div>
  );
}

export default App;
