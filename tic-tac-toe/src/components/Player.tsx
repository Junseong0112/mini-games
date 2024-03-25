import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // 리액트에서 상태변경할 때, 해당 상태의 이전 값을 변경하는경우 새로운 함수로 내보내야 값이 즉시 저장된다.
    // () => ... 함수로 상태변경 값을 내보내는 이유는 이전 값을 바뀌는게 전체 코드가 끝나고 나서 바뀌는 거기 때문에 그걸 방지하려면 직전의 값을 새롭게 변경시켜야한다.
    setIsEditing((editing) => !editing); // => true;

    // 플레이어 이름의 값이 변경 되었을 때만 작동
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit'

  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save'
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
