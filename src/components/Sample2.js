import React, { useState } from 'react';

const initialBoard = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
];

const ConnectFour = () => {
  const [board, setBoard] = useState(initialBoard);

  // Function to handle click event on a circle/button
  const handleClick = (row, col) => {
    // Your logic to update the board state when a circle/button is clicked
    const updatedBoard = [...board];
    updatedBoard[row][col] = true; // disable the clicked button
    setBoard(updatedBoard);
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
            {row.map((disabled, colIndex) => (
              <button
                key={colIndex}
                className={`cell ${disabled ? 'disabled' : ''}`}
                onClick={() => handleClick(rowIndex, colIndex)}
                disabled={disabled}
              >
                {/* Render the content of the button */}
                {disabled ? 'Disabled' : 'Enabled'}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;