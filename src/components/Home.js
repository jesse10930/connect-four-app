import React from 'react';
import logo from '../starter-code/images/logo.svg';
import pvpImg from '../starter-code/images/player-vs-player.svg';

const Home = () => {
  return (
    // <div id="home-cont">
    //   <div id="home-cont-sq">
    //     <div id="home-sel-cont">
    //       <div id="home-img">
    //         <img
    //           id="home-img"
    //           src={logo}
    //           alt="logo"
    //         />
    //       </div>
    //       <div id="home-btn-cont">
    //         <button id="pvp-btn" className="big-yellow-btn heading-s">
    //           <span>player vs player</span>
    //           <img 
    //             src={pvpImg}
    //             alt="Player vs player"
    //           />
    //           </button>
    //         <button id="rules-btn" className="big-white-btn heading-s">game rules</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id="game-play">
      <div id="bot-shadow"></div>
      <div id="header">
        <button id="menu-btn" className='sm-prpl-btn heading-xs'>menu</button>
        <img 
          src={logo}
          alt="logo"
        />
        <button id="menu-btn" className='sm-prpl-btn heading-xs'>restart</button>
      </div>
      <div id="game-board">

      </div>
    </div>
  )
}

export default Home;