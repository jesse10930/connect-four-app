import React, { useState, Fragment } from 'react';
import RulesModal from './RulesModal';
import logo from '../starter-code/images/logo.svg';
import pvpImg from '../starter-code/images/player-vs-player.svg';
import pvcImg from '../starter-code/images/player-vs-cpu.svg';

const MainMenu = ({ gameStartStop }) => {
  const [showRules, setShowRules] = useState(false);

  const rulesClick = (e) => {
    setShowRules(!showRules);
  }

  return (
    <Fragment>
      {showRules ? (
        <RulesModal rulesClick={rulesClick}/>
      ) : (
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
                <button id="pvc-btn" className="big-yellow-btn heading-s" onClick={gameStartStop}>
                  <span>player vs computer</span>
                  <img 
                    src={pvcImg}
                    alt="Player vs computer"
                  />
                </button>
                <button
                  id="rules-btn" 
                  className="big-white-btn heading-s" 
                  onClick={rulesClick}>game rules
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default MainMenu;