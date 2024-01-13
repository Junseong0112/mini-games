import Board from "./Board";
import Button from "./Button"
import {useState} from 'react'
import './styles/App.css'
import Header from "./Header";
import Basic from './assets/basic.png';
import Win from './assets/win.png';
import Lose from './assets/lose.png'
import Modal from './Modal'

function random(n) {
  return Math.ceil(Math.random() * n);
};
function App () {
  const [winner, setWinner] = useState('게임에서 이겨보세요!')
  const [descript, setDescript] = useState('')
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [disableClick, setDisableClick] = useState(false);
  const [imgUrl, setImgUrl] = useState(Basic)
  const [winCondition, setWinCondition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    const myNewHistory = [...myHistory, nextMyNum];
    const otherNewHistory = [...otherHistory, nextOtherNum];
    const myNewSum = myNewHistory.reduce((acc, cur) => acc + cur, 0);
    const otherNewSum = otherNewHistory.reduce((acc, cur) => acc + cur, 0);

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum])

    if(winCondition === 1){
      setDescript('50점을 먼저 달성하세요')
      if(myNewSum >= 50){
        setWinner('승리하셨습니다!')
        setDisableClick(true)
        setImgUrl(Win)
      }else if(otherNewSum >= 50){
        setWinner('패배하셨습니다!')
        setDisableClick(true)
        setImgUrl(Lose)
      }
    }else if(winCondition === 2){
      setDescript('1부터 6까지 먼저 모아보세요')
      if(new Set(myNewHistory).size === 6){
        setWinner('승리하셨습니다!')
        setDisableClick(true)
        setImgUrl(Win)
      }else if(new Set(otherNewHistory).size === 6){
        setWinner('패배하셨습니다!')
        setDisableClick(true)
        setImgUrl(Lose)
      }
    }
    
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setWinner('게임에서 이겨보세요!')
    setDisableClick(false)
    setImgUrl(Basic)
  }

  const handleOptionChange = (option) => {
    setWinCondition(option);
    setIsModalOpen(false)
    setMyHistory([])
    setOtherHistory([])
    setWinner('게임에서 이겨보세요!')
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="App">
      {isModalOpen&&<Modal onChange={handleOptionChange} closeModal={closeModal} />}
      <main>
        <Header winner={winner} imgUrl={imgUrl} descript={descript}/>
        <article>
          <Button className="App-button" color='orange' onClick ={handleRollClick} disableClick={disableClick}>던지기</Button>
          <Button className="App-button" color='green' onClick ={handleClearClick}>다시하기</Button>
          <Button className="App-button" color="gray" onClick={openModal}>
            옵션 선택
          </Button>
        </article>
        <div className="Board-box">
          <Board name ='나' color='orange' gameHistory={myHistory}/>
          <Board name ='상대' color='green' gameHistory={otherHistory}/>
        </div>
      </main>
    </div>
  )
}

export default App;