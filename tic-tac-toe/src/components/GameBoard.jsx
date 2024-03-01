export default function GameBoard({ onSlectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowidx) => (
        <li key={rowidx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                {/* index 값을 정해주기 위해서 익명함수를 이용해서 rowIdx, colIdx 값을 받을 수 있게 작성 */}
                <button
                  onClick={() => onSlectSquare(rowidx, colIdx)}
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
}
