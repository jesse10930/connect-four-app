import React from 'react';

const WinnerBoard = ({ redActive, players, resetBoard }) => {
  return (
    <div id="winner-board">
      <p id="winning-player" className='heading-xs'>{(redActive) ? players[0] : players[1]}</p>
      <p id="time" className="heading-l">wins</p>
      <button className={`${redActive ? 'heading-xs play-again-btn red-win-btn' : 'heading-xs play-again-btn yellow-win-btn'}`} onClick={resetBoard}>play again</button>
  </div>
  )
}

export default WinnerBoard;