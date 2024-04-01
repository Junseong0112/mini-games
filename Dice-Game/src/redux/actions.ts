export const rollDice = () => ({
  type: "ROLL_DICE",
});

export const clearGame = () => ({
  type: "CLEAR_GAME",
});

export const setWinCondition = (option) => ({
  type: "SET_WIN_CONDITION",
  payload: option,
});

export const openModal = () => ({
  type: "OPEN_MODAL",
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
