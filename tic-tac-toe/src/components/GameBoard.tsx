import React from "react";

interface Props {
  onSelectSquare: (rowIdx: number, colIdx: number) => void;
  board: (string | null)[][];
}

const GameBoard: React.FC<Props> = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                {/* index 값을 정해주기 위해서 익명함수를 이용해서 rowIdx, colIdx 값을 받을 수 있게 작성 */}
                <button
                  onClick={() => onSelectSquare(rowIdx, colIdx)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
