import React, { useEffect, useState } from 'react';
import redMarker from '../starter-code/images/marker-red.svg';
import yellowMarker from '../starter-code/images/marker-yellow.svg';
import blackBoard from '../starter-code/images/board-layer-black-large.svg';
import whiteBoard from '../starter-code/images/board-layer-white-large.svg';
import redTurn from '../starter-code/images/turn-background-red.svg';
import yellowTurn from '../starter-code/images/turn-background-yellow.svg';
// import redCounter from '../starter-code/images/counter-red-large.svg';
// import yellowCounter from '../starter-code/images/counter-yellow-large.svg';

const PlayingBoard = ({ players, paused, increaseScore, changeBotColor }) => {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [redActive, setRedActive] = useState(true);
  const [playingBoardArr, setPlayingBoardArr] = useState([
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]]
  ])

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

  const onCircleClick = (e) => {
    let location = e.target.parentNode.id;

    let clickedCircle = document.getElementById(location);
    clickedCircle.getElementsByTagName("button")[0].setAttribute("disabled", true);
    clickedCircle.getElementsByTagName("button")[0].classList.add("disabled");

    if (redActive === true) {
      clickedCircle.getElementsByTagName("button")[0].classList.add("red-clicked");
    } else {
      clickedCircle.getElementsByTagName("button")[0].classList.add("yellow-clicked");
    }

    setRedActive(!redActive);

    let colNum = parseInt(location[1]);
    let leftPercent = ((colNum - 1) * 14) + 5;
    let leftPerStr = leftPercent.toString() + "%";
    document.getElementById("marker").style.left = leftPerStr;

    let rowNum = parseInt(location[3]);

    if (location[3] !== "1") {
      let oneAbove = location[0] + location[1] + location[2] + parseInt(location[3] - 1).toString();
      let oneAboveClickedCircle = document.getElementById(oneAbove);
      oneAboveClickedCircle.getElementsByTagName("button")[0].removeAttribute("disabled", false);
      oneAboveClickedCircle.getElementsByTagName("button")[0].classList.remove("disabled");
    }

    let newPlayingBoard = playingBoardArr;

    if (redActive === true) {
      newPlayingBoard[rowNum - 1][colNum - 1] = 'red'
    } else {
      newPlayingBoard[rowNum - 1][colNum - 1] = 'yellow'
    }
    
    setPlayingBoardArr(newPlayingBoard);

    horizontalCheck(newPlayingBoard);

    setTimeRemaining(30);
  }

  const horizontalCheck = (newPlayingBoard) => {
    for (let row = 0; row <= 5; row++) {
      for (let col = 0; col <= 3; col++) {
        let temp = newPlayingBoard[row][col] + newPlayingBoard[row][col + 1] + newPlayingBoard[row][col + 2] + newPlayingBoard[row][col + 3];
        let tempActive = (redActive) ? "redredredred" : "yellowyellowyellowyellow";
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    verticalCheck(newPlayingBoard);
  }


  const verticalCheck = (newPlayingBoard) => {
    for (let col = 0; col <= 6; col++) {
      for (let row = 0; row <= 2; row++) {
        let temp = newPlayingBoard[row][col] + newPlayingBoard[row + 1][col] + newPlayingBoard[row + 2][col] + newPlayingBoard[row + 3][col];
        let tempActive = (redActive) ? "redredredred" : "yellowyellowyellowyellow";
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    diagonalUpCheck(newPlayingBoard);
  }

  const diagonalUpCheck = (newPlayingBoard) => {
    for (let col = 1; col <= 4; col++) {
      for (let row = 4; row <= 6; row++) {
        let temp = newPlayingBoard[row - 1][col - 1] + newPlayingBoard[row - 2][col] + newPlayingBoard[row - 3][col + 1] + newPlayingBoard[row - 4][col + 2];
        let tempActive = (redActive) ? "redredredred" : "yellowyellowyellowyellow";
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    diagonalDownCheck(newPlayingBoard);
  }

  const diagonalDownCheck = (newPlayingBoard) => {
    for (let col = 1; col <= 4; col++) {
      for (let row = 1; row <= 3; row++) {
        let temp = newPlayingBoard[row - 1][col - 1] + newPlayingBoard[row][col] + newPlayingBoard[row + 1][col + 1] + newPlayingBoard[row + 2][col + 2];
        let tempActive = (redActive) ? "redredredred" : "yellowyellowyellowyellow";
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }
  }


  const endGame = (redActive, winningRow, winningCol) => {
    increaseScore(redActive);
    changeBotColor(redActive);
  }


  return (
    <div id="pb-cont">
      <div id="marker-cont">
        <img 
          id="marker"
          src={redActive ? redMarker : yellowMarker}
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
          <div id="c1r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c2r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c3r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c4r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c5r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c6r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c7r1" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c1r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c2r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c3r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c4r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c5r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c6r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c7r2" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c1r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c2r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c3r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c4r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c5r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c6r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c7r3" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c1r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c2r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c3r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c4r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c5r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c6r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c7r4" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c1r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c2r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c3r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c4r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c5r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c6r5" className="circle-cont"onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c7r5" className="circle-cont" onClick={onCircleClick}>
            <button className="spaceBtn disabled" disabled={true} onClick={onCircleClick}></button>
          </div>
          <div id="c1r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c2r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c3r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c4r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c5r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c6r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
          <div id="c7r6" className="circle-cont">
            <button className="spaceBtn" disabled={false} onClick={onCircleClick}></button>
          </div>
        </div>
      </div>
      <div id="turn">
        <img
          src={redActive ? redTurn: yellowTurn}
          alt="turn"
        />
        <p id="players-turn" className='heading-xs'>{(redActive) ? players[0] : players[1]}'s turn</p>
        <p id="time" className="heading-l">{timeRemaining}</p>
      </div>      
    </div>
  )
}

export default PlayingBoard;