import React from 'react';

const WinnerBoard = ({ redActive, players }) => {
  return (
    <div id="winner-board">
      <p id="winning-player" className='heading-xs'>{(redActive) ? players[0] : players[1]}</p>
      <p id="time" className="heading-l">wins</p>
      <button className='sm-prpl-btn heading-xs play-again-btn'>play again</button>
  </div>
  )
}

export default WinnerBoard;