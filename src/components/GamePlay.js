import React from 'react';
import ScoreBoard from './ScoreBoard';
import PlayingBoard from './PlayingBoard';
import logo from '../starter-code/images/logo.svg';

const GamePlay = () => {

  return (
    <div id="game-play">
      <div id="bot-shadow"></div>
      <div id="header">
        <button id="menu-btn" className='sm-prpl-btn heading-xs'>menu</button>
        <img 
          src={logo}
          alt="logo"
        />
        <button id="menu-btn" className='sm-prpl-btn heading-xs'>restart</button>
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