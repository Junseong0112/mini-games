import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  // gameTurns state를 이용하여 GameBoard, Log 컴포넌트에 상태를 업데이트 할 수 있기에 가독성 및 효율적으로 코드를 작성이 가능하다.
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  // 게임이 끝난 후에 null 값을 가지고있는 새로운 gameboard 판을 만들기 위해 복사를 해서 사용
  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  // initial Board 의 값에 gmaeTurns state 값 추가
  for (const turn of gameTurns) {
    // console.log(turn);
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  //  WINNING_COMBINATIONS 승리 조건에 부합되는 배열에 gameBoard 값이 X인지 O인지 확인하기
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // 우승 조건과 같은지 비교 세개의 상수값이 X 또는 O를 같고 있는지
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      // X, O의 값이 아닌 그 값을 가지고 있는 player 이름의 값을 변수에 할당
      winner = players[firstSquareSymbol];
    }
  }

  // 비기기 위한 조건
  const hasDraw = gameTurns.length === 9 && !winner;

  // rowIndex, colIndex를 이용하여 각 버튼의 square, player 값을 저장
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  // 게임 리셋을 위한 로직
  const handleRestart = () => {
    setGameTurns([]);
  };

  // 게임 플레이어 이름의 데이터를 변경하기 위한 로직
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* 이긴사람이 있거나 비긴사람이 있을 때 보여지는 컴포넌트 */}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSlectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
