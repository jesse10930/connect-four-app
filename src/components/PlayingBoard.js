import React, { useEffect, useState } from 'react';
import marker from '../starter-code/images/marker-red.svg';
import blackBoard from '../starter-code/images/board-layer-black-large.svg';
import whiteBoard from '../starter-code/images/board-layer-white-large.svg';
import turn from '../starter-code/images/turn-background-red.svg';

const PlayingBoard = ({ players, paused }) => {
  const [timeRemaining, setTimeRemaining] = useState(30);

  useEffect(() => {
    const myCountdown = setInterval(() => {
      if(!paused) {
        if(timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1)
        }
      }
    }, 987);
    return () => clearInterval(myCountdown);
  });


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
        <div id='buttons-div'>
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
          <div id="c1r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r1" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c1r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r2" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c1r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r3" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c1r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r4" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c1r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r5" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c1r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c2r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c3r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c4r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c5r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c6r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
          <div id="c7r6" className="circle-cont">
            <button className="spaceBtn"></button>
          </div>
        </div>
      </div>
      <div id="turn">
        <img
          src={turn}
          alt="turn"
        />
        <p id="players-turn" className='heading-xs'>{players[0]}'s turn</p>
        <p id="time" className="heading-l">{timeRemaining}</p>
      </div>      
    </div>
  )
}

export default PlayingBoard;