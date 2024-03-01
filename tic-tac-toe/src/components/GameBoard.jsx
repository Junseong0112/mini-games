const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  onSlectSquare,
  activePlayerSymbol,
  turns,
}) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    console.log(turn);
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  // App 컴포넌트로 상태를 끌어올려서 사용했기 때문에 아래 코드는 주석처리, log 컴포넌트와 같이 사용하기 위해서 끌어올려서 사용
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     // 객체, 배열은 원본을 훼손시키지 않고 복사하여 새로운 객체, 배열로 반환해야한다.
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   // player가 변경되게 하는 함수
  //   onSlectSquare();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowidx) => (
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
