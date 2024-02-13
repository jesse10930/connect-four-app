import React, { useState } from 'react';

const initialBoard = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

const ConnectFour = () => {
  const [board, setBoard] = useState(initialBoard);

  // Function to handle click event on a circle/button
  const handleClick = (row, col) => {
    // Your logic to update the board state when a circle/button is clicked
  };

  // Function to reset the board to its initial state
  const resetBoard = () => {
    setBoard(initialBoard);
  };

  // Your JSX to render the board UI
  return (
    <div>
      <button onClick={resetBoard}>Reset Board</button>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <button 
                key={colIndex} 
                className={`cell ${cell}`} 
                onClick={() => handleClick(rowIndex, colIndex)}>
                {/* Render the color of the circle based on the state */}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;