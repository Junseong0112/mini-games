import { WINNING_COMBINATIONS } from "../winning-combinations";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export function deriveGameBoard(gameTurns) {
  // 게임이 끝난 후에 null 값을 가지고있는 새로운 gameboard 판을 만들기 위해 복사를 해서 사용
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  // initial Board 의 값에 gmaeTurns state 값 추가
  for (const turn of gameTurns) {
    // console.log(turn);
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export function deriveWinner(gameBoard, players) {
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

  return winner;
}
