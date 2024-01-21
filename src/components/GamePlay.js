import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import PlayingBoard from './PlayingBoard';
import logo from '../starter-code/images/logo.svg';

const GamePlay = ({gameStartStop, players}) => {
  const [scores, setScores] = useState([0, 0]);
  const [numOfGames, setNumOfGames] = useState(1);
  
  useEffect(() => {
    sessionStorage.setItem("play1Score", 0);
    sessionStorage.setItem("play2Score", 0);
  }, []);

  const increaseScore = () => {
    let newScore1 = Number(sessionStorage.getItem("play1Score")) + 1;
    let newScore2 = Number(sessionStorage.getItem("play2Score")) + 2;

    sessionStorage.setItem("play1Score", newScore1);
    sessionStorage.setItem("play2Score", newScore2);

    setScores([
      Number(sessionStorage.getItem("play1Score")), 
      Number(sessionStorage.getItem("play2Score"))
    ]);
  }

  const endOfGame = () => {
    console.log('hey')
    // get who won
    // increase that player's score
    // increase the numOfGames
    // reset the board
  }

  return (
    <div id="game-play">
      <div id="bot-shadow"></div>
      <div id="header">
        <button id="menu-btn" className='sm-prpl-btn heading-xs' onClick={gameStartStop}>menu</button>
        <img 
          src={logo}
          alt="logo"
        />
        <button id="restart-btn" className='sm-prpl-btn heading-xs'>restart</button>
      </div>
      <div id="game-board">
        <ScoreBoard
          player={players[0]} 
          score={scores[0]}
        />
        <PlayingBoard
          players={players}
        />
        <ScoreBoard
          player={players[1]}
          score={scores[1]}
        />
      </div>
    </div>
  );
};

export default GamePlay;