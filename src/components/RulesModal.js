import React from 'react';
import check from '../starter-code/images/icon-check.svg'

const rulesModal = ({rulesClick}) => {
  return (
    <div id='rules-modal'>
      <div id='rules-cont'>
          <h1 id='rules-heading' className='heading-l'>RULES</h1>
          <h3 id="rules-obj-head" className='heading-s'>OBJECTIVE</h3>
          <p id='rules-obj'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
          <h1 id="how-to-play-head" className='heading-s'>HOW TO PLAY</h1>
          <ol id='how-to-play'>
            <li>Red goes first in the game.</li>
            <li>Players must alternate turns, and only one disk can be dropped in each turn.</li>
            <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
            <li>The starter of the previous game goes second on the next game.</li>
          </ol>
          <button id='check-btn' onClick={rulesClick}>
            <img
              src={check}
              alt='check'
            >
            </img>
          </button>
      </div>
    </div>
  );
}

export default rulesModal;