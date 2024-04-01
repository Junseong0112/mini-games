import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  rollDice,
  clearGame,
  setWinCondition,
  openModal,
  closeModal,
} from '../redux/actions'
import Board from './Board'
import Button from './Button'
import Header from './Header'
import Modal from './Modal'
import '../styles/App.css'
import { RootState } from 'redux/store'

function App() {
  const dispatch = useDispatch()
  const {
    winner,
    description,
    myHistory,
    otherHistory,
    disableClick,
    imgUrl,
    winCondition,
    isModalOpen,
  } = useSelector((state: RootState) => state.appReducer)

  const handleRollClick = () => {
    dispatch(rollDice())
  }

  const handleClearClick = () => {
    dispatch(clearGame())
  }

  const handleOptionChange = (option: number) => {
    dispatch(setWinCondition(option))
    dispatch(closeModal())
  }

  const handleClickOpenModal = () => {
    dispatch(openModal())
  }

  return (
    <div className="App">
      {isModalOpen && (
        <Modal onChange={handleOptionChange} winCondition={winCondition} />
      )}
      <main>
        <Header winner={winner} imgUrl={imgUrl} description={description} />
        <article>
          <Button
            className="App-button"
            color="orange"
            onClick={handleRollClick}
            disableClick={disableClick}
          >
            던지기
          </Button>
          <Button
            className="App-button"
            color="green"
            onClick={handleClearClick}
          >
            다시하기
          </Button>
          <Button
            className="App-button"
            color="gray"
            onClick={handleClickOpenModal}
          >
            옵션 선택
          </Button>
        </article>
        <div className="Board-box">
          <Board
            name="나"
            color="orange"
            gameHistory={myHistory}
            winCondition={winCondition}
          />
          <Board
            name="상대"
            color="green"
            gameHistory={otherHistory}
            winCondition={winCondition}
          />
        </div>
      </main>
    </div>
  )
}

export default App
