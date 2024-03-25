import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import {
  deriveActivePlayer,
  deriveGameBoard,
  deriveWinner,
} from "./helper/helper.js";

const PLAYERS: {
  X: string;
  O: string;
} = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  // gameTurns state를 이용하여 GameBoard, Log 컴포넌트에 상태를 업데이트 할 수 있기에 가독성 및 효율적으로 코드를 작성이 가능하다.
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);

  // X, O의 값에 따라 css className 'active' 값을 반환
  const activePlayer = deriveActivePlayer(gameTurns);

  // 기존 게임보드판에 값을 넣는 함수
  const gameBoard = deriveGameBoard(gameTurns);

  // 이긴사람을 결정하는 함수
  const winner = deriveWinner(gameBoard, players);

  // 비기기 위한 조건
  const hasDraw = gameTurns.length === 9 && !winner;

  // rowIndex, colIndex를 이용하여 각 버튼의 square, player 값을 저장
  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
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
  const handlePlayerNameChange = (symbol: string, newName: string) => {
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
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* 이긴사람이 있거나 비긴사람이 있을 때 보여지는 컴포넌트 */}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
