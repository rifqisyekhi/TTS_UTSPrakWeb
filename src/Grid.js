import React, { useState } from 'react';

export default function Grid({ answerGrid, numberGrid }) {
    const initialUserGrid = [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
      ];

      
  const [userGrid, setUserGrid] = useState(initialUserGrid);

  const handleCellChange = (row, col, value) => {
    const updatedGrid = [...userGrid];
    updatedGrid[row][col] = value;
    setUserGrid(updatedGrid);
    
    const wrapInput = document.querySelector(`#cell-${row}-${col}`);
    const answer = answerGrid[row][col].toLocaleLowerCase();
    if (wrapInput) {
      if (value.toLocaleLowerCase() === answer) {
        wrapInput.classList.add("bg-green");
        wrapInput.classList.remove("bg-red");
      } else if (value !== '') {
        wrapInput.classList.add("bg-red");
        wrapInput.classList.remove("bg-green");
      } else {
        wrapInput.classList.remove("bg-green", "bg-red");
      }
    }
  };
  
  const renderInput = (cell, row, col) => {
    const number = numberGrid[row][col];
  
    return (
      <div className="input-container">
        {number !== ' ' && number !== '' && (
          <span className="number-overlay">{number}</span>
        )}
        <input
          id={`cell-${row}-${col}`}
          className={'input'}
          type="text"
          maxLength="1"
          onInput={(event) => handleCellChange(row, col, event.target.value)}
          disabled={cell === '' || cell === ' '}
        />
      </div>
    );
  };

  return (
    <div className='card'>
    <table>
        <tbody>
          {answerGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  {renderInput(cell, rowIndex, colIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
