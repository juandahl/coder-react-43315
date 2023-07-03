import React, { useState } from 'react';
import './Tateti.css';

const defaultBoard = [
  null, null, null, 
  null, null, null,
  null, null, null,
]

const Tateti = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handlePlayerTurn = (index) => {
    if (!winner && !board[index]) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      const newPlayer = currentPlayer === 'X' ? 'O' : 'X';
      const newWinner = calculateWinner(newBoard);

      setBoard(newBoard);
      setCurrentPlayer(newPlayer);
      setWinner(newWinner);
    }
  };

  const calculateWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const getStatus = () => {
    let status = '';
    if (winner) {
      status = `¡Jugador ${winner} gana!`;
    } else if (!board.includes(null)) {
      status = '¡Empate!';
    } else {
      status = `Proximo Jugador: ${currentPlayer}`;
    }

    return status;  
  }

  return (
    <div className="tateti">
      <div className="status">{getStatus()}</div>
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="board-square">
            <div className="square" onClick={() => handlePlayerTurn(index)}>
              {board[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tateti;
