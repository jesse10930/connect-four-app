import React, { useState, useEffect, Fragment} from 'react';
import ScoreBoard from './ScoreBoard';
import PlayingBoard from './PlayingBoard';
import Pause from './Pause';
import logo from '../starter-code/images/logo.svg';

const GamePlay = ({callSetStarted, players}) => {
  const [scores, setScores] = useState([0, 0]);
  const [numOfGames, setNumOfGames] = useState(1);
  const [paused, setPaused] = useState(false);
  
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

  const contGame = () => {
    setPaused(false);
  }

  const restartGame = () => {
    setPaused(false);
  }

  const quitGame = () => {
    callSetStarted();
  }

  const endOfGame = () => {
    console.log('hey')
    // get who won
    // increase that player's score
    // increase the numOfGames
    // reset the board
  }

  const menuClick = () => {
    setPaused(true);
  }

  return (
    <Fragment>
      {paused && 
      <Pause 
        contGame={contGame}
        quitGame={quitGame} 
        restartGame={restartGame}
      />
      }
      <div id="game-play">
        <div id="bot-shadow"></div>
        <div id="header">
          <button id="menu-btn" className='sm-prpl-btn heading-xs' onClick={menuClick}>menu</button>
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
            paused={paused}
          />
          <ScoreBoard
            player={players[1]}
            score={scores[1]}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default GamePlay;