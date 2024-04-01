// as const 법을 사용하여 typescript 타입이 string이 아닌 실제값을 가리킬 수 있다.
const ROLL_DICE = 'ROLL_DICE' as const
const CLEAR_GAME = 'CLEAR_GAME' as const
const SET_WIN_CONDITION = 'SET_WIN_CONDITION' as const
const OPEN_MODAL = 'OPEN_MODAL' as const
const CLOSE_MODAL = 'CLOSE_MODAL' as const

export const rollDice = () => ({
  type: ROLL_DICE,
})

export const clearGame = () => ({
  type: CLEAR_GAME,
})

export const setWinCondition = (option: number) => ({
  type: SET_WIN_CONDITION,
  payload: option,
})

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

// ReturnType 을 이용해서 함수에서 반환하는 타입을 가져올 수 있는 유틸 타입이다.
export type ActionTypes =
  | ReturnType<typeof rollDice>
  | ReturnType<typeof clearGame>
  | ReturnType<typeof setWinCondition>
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>
