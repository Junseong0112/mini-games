import { ActionTypes } from './actions'
import Basic from '../assets/basic.png'
import Win from '../assets/win.png'
import Lose from '../assets/lose.png'

interface State {
  winner: string
  description: string
  myHistory: number[]
  otherHistory: number[]
  disableClick: boolean
  imgUrl: string
  winCondition: number
  isModalOpen: boolean
}

const initialState: State = {
  winner: '게임에서 이겨보세요!',
  description: '',
  myHistory: [],
  otherHistory: [],
  disableClick: false,
  imgUrl: Basic,
  winCondition: 0,
  isModalOpen: true,
}

const random = (n: number) => {
  return Math.ceil(Math.random() * n)
}

const calculateWinner = (state: State) => {
  const { winCondition, myHistory, otherHistory } = state

  if (winCondition === 1) {
    const mySum = myHistory.reduce((acc, cur) => acc + cur, 0)
    const otherSum = otherHistory.reduce((acc, cur) => acc + cur, 0)

    if (mySum >= 50 || otherSum >= 50) {
      const winner = mySum >= 50 ? 'Win' : 'Lose'
      return {
        ...state,
        winner,
        disableClick: true,
        imgUrl: winner === 'Win' ? Win : Lose,
      }
    }
  } else if (winCondition === 2) {
    if (new Set(myHistory).size === 6 || new Set(otherHistory).size === 6) {
      const winner = new Set(myHistory).size === 6 ? 'Win' : 'Lose'
      return {
        ...state,
        winner,
        disableClick: true,
        imgUrl: winner === 'Win' ? Win : Lose,
      }
    }
  }

  return state
}

const appReducer = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'ROLL_DICE': {
      const nextMyNum = random(6)
      const nextOtherNum = random(6)
      const myNewHistory = [...state.myHistory, nextMyNum]
      const otherNewHistory = [...state.otherHistory, nextOtherNum]

      const newState = {
        ...state,
        myHistory: myNewHistory,
        otherHistory: otherNewHistory,
      }

      return calculateWinner(newState)
    }
    case 'CLEAR_GAME': {
      return {
        ...initialState,
        isModalOpen: false,
        winCondition: state.winCondition,
        description: state.description,
      }
    }

    case 'SET_WIN_CONDITION': {
      const option = action.payload
      let description = ''

      if (option === 1) {
        description = '50점을 먼저 달성하세요'
      } else if (option === 2) {
        description = '1부터 6까지 먼저 모아보세요'
      }

      return {
        ...initialState,
        winCondition: option,
        description,
        isModalOpen: false,
        disableClick: false,
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        isModalOpen: true,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer
