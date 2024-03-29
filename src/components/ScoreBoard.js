import React from 'react';
import face1 from '../starter-code/images/player-one.svg';
import face2 from '../starter-code/images/player-two.svg';
import face3 from '../starter-code/images/cpu.svg';

const ScoreBoard = ({ player, score }) => {

  return (
    <div id="sb-cont" className="sb-cont">
      <div id="face" className='face'>
        <img
          id="face-img"
          src={player === "player 1" ? face1 
            : player === "player 2" ? face2
            : face3}
          alt="face"
        />
      </div>
      <div id="sb" className='sb'>
        <p id="player" className='player heading-s'>{player}</p>
        <p id="score" className='score heading-l'>{score}</p>
      </div>
    </div> 
  )
}

export default ScoreBoard;