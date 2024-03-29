import React, { useState, useEffect, Fragment} from 'react';
import ScoreBoard from './ScoreBoard';
import PlayingBoard from './PlayingBoard';
import Pause from './Pause';
import logo from '../starter-code/images/logo.svg';

const GamePlay = ({callSetStarted, players, gameStartStop}) => {
  const [scores, setScores] = useState([0, 0]);
  const [numOfGames, setNumOfGames] = useState(1);
  const [paused, setPaused] = useState(false);
  const [winner, setWinner] = useState(false);
  
  useEffect(() => {
    sessionStorage.setItem("play1Score", 0);
    sessionStorage.setItem("play2Score", 0);
  }, []);

  const increaseScore = (redActive) => {
    let newScore1;
    let newScore2; 

    if (redActive) {
      newScore1 = Number(sessionStorage.getItem("play1Score")) + 1;
      sessionStorage.setItem("play1Score", newScore1);
    } else {
      newScore2 = Number(sessionStorage.getItem("play2Score")) + 1;
      sessionStorage.setItem("play2Score", newScore2);
    }
    
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

  const callSetWinner = () => {
    let newWinner = winner;
    setWinner(!newWinner);
  }

  // const endOfGame = () => {
    // get who won
    // increase that player's score
    // increase the numOfGames
    // reset the board
  // }

  const menuClick = () => {
    setPaused(true);
  }

  const changeBotColor = (redActive) => {
    redActive ? document.getElementById("bot-shadow").style.backgroundColor = "#fd6687" : document.getElementById("bot-shadow").style.backgroundColor = "#ffce67";
  }

  const resetBotColor = () => {
    document.getElementById("bot-shadow").style.backgroundColor = "#5c2dd5";
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
          <button id="restart-btn" className='sm-prpl-btn heading-xs' onClick={restartGame}>restart</button>
        </div>
        <div id="game-board">
          <ScoreBoard
            player={players[0]} 
            score={scores[0]}
          />
          <PlayingBoard
            players={players}
            paused={paused}
            winner={winner}
            increaseScore={increaseScore}
            changeBotColor={changeBotColor}
            callSetWinner={callSetWinner}
            resetBotColor={resetBotColor}
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