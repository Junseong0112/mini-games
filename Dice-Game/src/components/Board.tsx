import Dice from "./Dice";
import "../styles/Board.css";

function Board({ name, color, gameHistory, winCondition }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((acc, cur) => acc + cur, 0);

  return (
    <section>
      <article className="header-sec">
        <h2>{name}</h2>
        <Dice color={color} num={num} />
      </article>
      {winCondition === 1 ? (
        <article className="score-sec">
          <h2>총점</h2>
          <p>{sum}</p>
        </article>
      ) : (
        <article className="score-sec">
          <h2>기록</h2>
          <p>{gameHistory.join(", ")}</p>
        </article>
      )}
    </section>
  );
}

export default Board;
