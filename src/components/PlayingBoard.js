import React, { useEffect, useState } from 'react';
import redMarker from '../starter-code/images/marker-red.svg';
import yellowMarker from '../starter-code/images/marker-yellow.svg';
import blackBoard from '../starter-code/images/board-layer-black-large.svg';
import whiteBoard from '../starter-code/images/board-layer-white-large.svg';
import redTurn from '../starter-code/images/turn-background-red.svg';
import yellowTurn from '../starter-code/images/turn-background-yellow.svg';
// import redCounter from '../starter-code/images/counter-red-large.svg';
// import yellowCounter from '../starter-code/images/counter-yellow-large.svg';
import WinnerBoard from '../components/WinnerBoard';

const initBoard = [
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [true, true, true, true, true, true, true],
  [false, false, false, false, false, false, false],
]

const PlayingBoard = ({ players, paused, increaseScore, changeBotColor, winner, callSetWinner }) => {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [redActive, setRedActive] = useState(true);
  const [playingBoardArr, setPlayingBoardArr] = useState([
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]],
    [[],[],[],[],[],[],[]]
  ]);
  const [board, setBoard] = useState(initBoard);
  const [pauseTimer, setPauseTimer] = useState(false);

  // Useeffect hook for timer
  useEffect(() => {
    const myCountdown = setInterval(() => {
      if(!pauseTimer) {
        if(timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1)
        }
        else {
          endGame(redActive, null, null);
          setPauseTimer(true);
          clearInterval(myCountdown);
        }
      }
    }, 987);
    return () => clearInterval(myCountdown);
  });

  // Called when a player clicks an empty space to make a move
  const onCircleClick = (e) => {
    // Declare the id div of the parent of the circle clicked and the div
    let location = e.target.parentNode.id;
    let row = parseInt(location[0]);
    let col = parseInt(location[1]);
    let clickedCircle = document.getElementById(location);
    
    const updatedBoard = [...board]
    updatedBoard[row][col] = false;
    updatedBoard[row - 1][col] = true;
    setBoard(updatedBoard);

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

  // Checks for a horizontal victory
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

  // Checks for a vertial victory
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

  // Checks for a diagonal victory from lower left to upper right
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

  // Checks for a diagonal victory from upper left to lower right
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

  // Resets the game
  const endGame = (redActive, winningRow, winningCol) => {
    increaseScore(redActive);
    changeBotColor(redActive);
    callSetWinner();
    setPlayingBoardArr([
      [[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[]],
      [[],[],[],[],[],[],[]]
    ]);
  }

  let initPlayBoard = (
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
        {board.map((row, rowIndex) => (
          row.map((disabled, colIndex) => (
            <div key={rowIndex + colIndex} id={(rowIndex).toString() + (colIndex).toString()} className="circle-cont">
              <button 
                key={colIndex} 
                className={`${disabled ? 'disabled' : ''} spaceBtn`}
                onClick={(e) => onCircleClick(e)}
                disabled={disabled}
              >
              </button>
            </div>
          ))
        ))}
      </div>
    </div>
  )

  const resetBoard = () => {
    setBoard(initBoard);
  };


  return (
    <div id="pb-cont">
      <div id="marker-cont">
        <img 
          id="marker"
          src={redActive ? redMarker : yellowMarker}
          alt="marker"
        />
      </div>
      {initPlayBoard}
      {(!winner) ? 
        <div id="turn">
          <img
            src={redActive ? redTurn: yellowTurn}
            alt="turn"
          />
          <p id="players-turn" className='heading-xs'>{(redActive) ? players[0] : players[1]}'s turn</p>
          <p id="time" className="heading-l">{timeRemaining}</p>
        </div> 
        : 
        <WinnerBoard 
          redActive={redActive}
          players={players}
          resetBoard={resetBoard}
        />
      }
    </div>
  )
}

export default PlayingBoard;