import React, {useState} from 'react';
import MainMenu from './components/MainMenu';
import GamePlay from './components/GamePlay';
import './App.scss';

const App = () => {
  const [started, setStarted] = useState(false);
  const [players, setPlayers] = useState(["player 1, player 2"]);

  const callSetStarted = () => {
    setStarted(!started);
  }

  const callSetPlayers = (personOrCPU) => {
    personOrCPU === "pvp-btn" ? setPlayers(["player 1", "player 2"]) : setPlayers(["player 1", "computer"]);
    callSetStarted();
  }

  const gameStartStop = (e) => {
    let personOrCPU = (e.target.parentNode.type === "submit") ? e.target.parentNode.id : e.target.id;
    callSetPlayers(personOrCPU);
  }

  return (
    <div className="main-app">
      {!started ? (
        <MainMenu
          gameStartStop={gameStartStop}
        />
      ) : (
        <GamePlay
          callSetStarted={callSetStarted}
          players={players}
        />
      )}
    </div>
  );
}

export default App;
