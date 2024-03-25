import React from "react";

interface Props {
  turns: { square: { row: number; col: number }; player: string }[];
}

const Log: React.FC<Props> = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
