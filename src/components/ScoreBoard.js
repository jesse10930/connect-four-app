import React from 'react';
import face from '../starter-code/images/player-one.svg'

const ScoreBoard = () => {
  return (
    <div id="sb-cont" className="sb-cont">
      <div id="face" className='face'>
        <img
          id="face-img"
          src={face}
          alt="face"
        />
      </div>
      <div id="sb" className='sb'>
        <p id="player" className='player heading-s'>player 1</p>
        <p id="score" className='score heading-l'>12</p>
      </div>
    </div> 
  )
}

export default ScoreBoard;