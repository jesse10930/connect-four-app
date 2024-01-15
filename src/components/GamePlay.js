import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import PlayingBoard from './PlayingBoard';
import logo from '../starter-code/images/logo.svg';

const GamePlay = ({gameStartStop}) => {
  // const [gamePlay1Score, setGamePlay1Score] = useState(0);
  // const [gamePlay2Score, setGamePlay2Score] = useState(0);
  
  // useEffect(() => {
  //   sessionStorage.setItem("play1Score", 0);
  //   sessionStorage.setItem("play2Score", 0);
  // }, []);

  // const updateScore = () => {
  //   let curPlay1Score = Number(sessionStorage.getItem("play1Score"));
  //   let curPlay2Score = Number(sessionStorage.getItem("play2Score"));

  //   let newPlay1Score = curPlay1Score + gamePlay1Score;
  //   let newPlay2Score = curPlay2Score + gamePlay2Score;

  //   sessionStorage.setItem("play1Score", newPlay1Score);
  //   sessionStorage.setItem("play2Score", newPlay2Score);
  // }

  // const printScores = () => {
  //   console.log(sessionStorage.getItem("play1Score"));
  //   console.log(sessionStorage.getItem("play2Score"));
  // }

  // const updateGameScore = (e) => {
  //   let player = e.target.id;
  //   console.log(player);
  //   if (player === "menu-btn") {
  //     let newGamePlay1Score = gamePlay1Score + 1;
  //     setGamePlay1Score(newGamePlay1Score);
  //   } else {
  //     let newGamePlay2Score = gamePlay2Score + 1;
  //     setGamePlay2Score(newGamePlay2Score);
  //   }
  //   console.log(gamePlay1Score);
  //   console.log(gamePlay2Score);
  // }

  return (
    <div id="game-play">
      <div id="bot-shadow"></div>
      <div id="header">
        <button id="menu-btn" className='sm-prpl-btn heading-xs' onClick={gameStartStop}>menu</button>
        <img 
          src={logo}
          alt="logo"
        />
        <button id="restart-btn" className='sm-prpl-btn heading-xs' >restart</button>
      </div>
      <div id="game-board">
        <ScoreBoard />
        <PlayingBoard />
        <ScoreBoard />
      </div>
</div>

  );
};

export default GamePlay;