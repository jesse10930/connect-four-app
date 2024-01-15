import React from 'react';
import logo from '../starter-code/images/logo.svg';
import pvpImg from '../starter-code/images/player-vs-player.svg';

const MainMenu = ({ gameStartStop }) => {
  return (
    <div id="home-cont">
      <div id="home-cont-sq">
        <div id="home-sel-cont">
          <div id="home-img">
            <img
              id="home-img"
              src={logo}
              alt="logo"
            />
          </div>
          <div id="home-btn-cont">
            <button id="pvp-btn" className="big-yellow-btn heading-s" onClick={gameStartStop}>
              <span>player vs player</span>
              <img 
                src={pvpImg}
                alt="Player vs player"
              />
              </button>
            <button id="rules-btn" className="big-white-btn heading-s">game rules</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu;