import React from 'react';
import marker from '../starter-code/images/marker-red.svg';
import blackBoard from '../starter-code/images/board-layer-black-large.svg';
import whiteBoard from '../starter-code/images/board-layer-white-large.svg';
import turn from '../starter-code/images/turn-background-red.svg';

const PlayingBoard = ({ players }) => {
  return (
    <div id="pb-cont">
      <div id="marker-cont">
        <img 
          id="marker"
          src={marker}
          alt="marker"
        />
      </div>
      <div id='playingboard'>
        <div id='buttons-div'></div>
        <img
          id="blackboard"
          src={blackBoard}
          alt="black-board"
        />
        <img
          id="whiteboard"
          src={whiteBoard}
          alt="white-board"
        />
      </div>
      <div id="turn">
        <img
          src={turn}
          alt="turn"
        />
        <p id="players-turn" className='heading-xs'>{players[0]}'s turn</p>
        <p id="time" className="heading-l">3s</p>
      </div>      
    </div>
  )
}

export default PlayingBoard;