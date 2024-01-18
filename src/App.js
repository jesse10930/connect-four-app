import React, {useState} from 'react';
import MainMenu from './components/MainMenu';
import GamePlay from './components/GamePlay';
import './App.scss';

const App = () => {
  const [started, setStarted] = useState(false);

  const gameStartStop = () => {
    setStarted(!started);
  }

  let players = ["player 1", "player 2"]

  return (
    <div className="main-app">
      {!started ? (
        <MainMenu 
          gameStartStop={gameStartStop}
        />
      ) : (
        <GamePlay 
          gameStartStop={gameStartStop}
          players={players}
        />
      )}
    </div>
  );
}

export default App;
