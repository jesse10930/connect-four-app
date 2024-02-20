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
  [{ disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }],
  [{ disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }],
  [{ disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }],
  [{ disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }],
  [{ disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }, { disabled: true, clicked: false }],
  [{ disabled: false, clicked: false }, { disabled: false, clicked: false }, { disabled: false, clicked: false }, { disabled: false, clicked: false }, { disabled: false, clicked: false }, { disabled: false, clicked: false }, { disabled: false, clicked: false }],
]

const PlayingBoard = ({ players, paused, increaseScore, changeBotColor, winner, callSetWinner }) => {
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [redActive, setRedActive] = useState(true);
  // const [playingBoardArr, setPlayingBoardArr] = useState([
  //   [[],[],[],[],[],[],[]],
  //   [[],[],[],[],[],[],[]],
  //   [[],[],[],[],[],[],[]],
  //   [[],[],[],[],[],[],[]],
  //   [[],[],[],[],[],[],[]],
  //   [[],[],[],[],[],[],[]]
  // ]);
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
  }, [timeRemaining]);

  // Called when a player clicks an empty space to make a move
  const onCircleClick = (e) => {
    // Declare the id div of the parent of the circle clicked and the div
    let location = e.target.parentNode.id;
    let row = parseInt(location[0]);
    let col = parseInt(location[1]);
    let clickedCircle = document.getElementById(location);
    
    let updatedBoard = [...board]
    updatedBoard[row][col] = { disabled: true, clicked: (redActive? 'red-clicked' : 'yellow-clicked') };
    if (row !== 0) {
      updatedBoard[row - 1][col] = { disabled: false, clicked: false };
    }

    setBoard(updatedBoard)
    setRedActive(!redActive);


    let leftPercent = ((col) * 14) + 4;
    let leftPerStr = leftPercent.toString() + "%";
    document.getElementById("marker").style.left = leftPerStr;

    // let newPlayingBoard = playingBoardArr;

    // if (redActive === true) {
    //   newPlayingBoard[rowNum - 1][colNum - 1] = 'red'
    // } else {
    //   newPlayingBoard[rowNum - 1][colNum - 1] = 'yellow'
    // }
    
    // setPlayingBoardArr(newPlayingBoard);

    horizontalCheck(updatedBoard);

    setTimeRemaining(30);
  }

  // Checks for a horizontal victory
  const horizontalCheck = (updatedBoard) => {
    for (let row = 0; row <= 5; row++) {
      for (let col = 0; col <= 3; col++) {
        let temp = updatedBoard[row][col].clicked + updatedBoard[row][col + 1].clicked + updatedBoard[row][col + 2].clicked + updatedBoard[row][col + 3].clicked;
        let tempActive = (redActive) ? "red-clickedred-clickedred-clickedred-clicked" : "yellow-clickedyellow-clickedyellow-clickedyellow-clicked";

        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    verticalCheck(updatedBoard);
  }

  // Checks for a vertial victory
  const verticalCheck = (updatedBoard) => {
    for (let col = 0; col <= 6; col++) {
      for (let row = 0; row <= 2; row++) {
        let temp = updatedBoard[row][col].clicked + updatedBoard[row + 1][col].clicked + updatedBoard[row + 2][col].clicked + updatedBoard[row + 3][col].clicked;
        let tempActive = (redActive) ? "red-clickedred-clickedred-clickedred-clicked" : "yellow-clickedyellow-clickedyellow-clickedyellow-clicked";
        
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    diagonalUpCheck(updatedBoard);
  }

  // Checks for a diagonal victory from lower left to upper right
  const diagonalUpCheck = (updatedBoard) => {
    for (let col = 1; col <= 4; col++) {
      for (let row = 4; row <= 6; row++) {
        let temp = updatedBoard[row - 1][col - 1].clicked + updatedBoard[row - 2][col].clicked + updatedBoard[row - 3][col + 1].clicked + updatedBoard[row - 4][col + 2].clicked;
        let tempActive = (redActive) ? "red-clickedred-clickedred-clickedred-clicked" : "yellow-clickedyellow-clickedyellow-clickedyellow-clicked";
        
        if (temp === tempActive) {
          let winningRow = row;
          let winningCol = col;

          endGame(redActive, winningRow, winningCol);
          break;
        }
      }
    }

    diagonalDownCheck(updatedBoard);
  }

  // Checks for a diagonal victory from upper left to lower right
  const diagonalDownCheck = (updatedBoard) => {
    for (let col = 1; col <= 4; col++) {
      for (let row = 1; row <= 3; row++) {
        let temp = updatedBoard[row - 1][col - 1].clicked + updatedBoard[row][col].clicked + updatedBoard[row + 1][col + 1].clicked + updatedBoard[row + 2][col + 2].clicked;
        let tempActive = (redActive) ? "red-clickedred-clickedred-clickedred-clicked" : "yellow-clickedyellow-clickedyellow-clickedyellow-clicked";
        
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
    console.log('end game');
    // increaseScore(redActive);
    // changeBotColor(redActive);
    // callSetWinner();
    // setPlayingBoardArr([
    //   [[],[],[],[],[],[],[]],
    //   [[],[],[],[],[],[],[]],
    //   [[],[],[],[],[],[],[]],
    //   [[],[],[],[],[],[],[]],
    //   [[],[],[],[],[],[],[]],
    //   [[],[],[],[],[],[],[]]
    // ]);
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
          row.map((cell, colIndex) => (
            <div key={rowIndex + colIndex} id={(rowIndex).toString() + (colIndex).toString()} className="circle-cont">
              <button 
                key={colIndex} 
                className={`${cell.disabled ? 'disabled' : ''} ${cell.clicked ? cell.clicked : ''} spaceBtn`}
                onClick={(e) => onCircleClick(e)}
                disabled={cell.disabled}
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