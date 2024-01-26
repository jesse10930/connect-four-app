import React from 'react';

const PauseModal = ({ contGame, restartGame, quitGame }) => {

  return (
    <div id='pause-container'>
      <div id='pause-sq'>
        <div id='pause-sel-cont'>
          <h1 id="pause-title" className='heading-l'>pause</h1>
          <div id="pause-btn-cont">
            <button id="continue-btn" className="big-white-btn heading-s" onClick={contGame}>
              <span>continue game</span>
            </button>
            <button id="restart-btn" className="big-white-btn heading-s" onClick={restartGame}>
              <span>restart</span>
            </button>
            <button id="quit-btn" className="big-pink-btn heading-s" onClick={quitGame}>
              <span>quit game</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PauseModal;