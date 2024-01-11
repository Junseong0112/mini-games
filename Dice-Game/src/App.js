import Board from "./Board";
import Button from "./Button"
import {useState} from 'react'
import './styles/App.css'
import Header from "./Header";

function random(n) {
  return Math.ceil(Math.random() * n);
};
function App () {
  const [winner, setWinner] = useState('게임에서 이겨보세요!')
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [disableClick, setDisableClick] = useState(false);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    const myNewHistory = [...myHistory, nextMyNum];
    const otherNewHistory = [...otherHistory, nextOtherNum];
    const myNewSum = myNewHistory.reduce((acc, cur) => acc + cur, 0);
    const otherNewSum = otherNewHistory.reduce((acc, cur) => acc + cur, 0);

    if(myNewSum >= 50){
      setWinner('승리하셨습니다!')
      setDisableClick(true)
    }else if(otherNewSum >= 50){
      setWinner('패배하셨습니다!')
      setDisableClick(true)
    }

    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum])
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setWinner('게임에서 이겨보세요!')
    setDisableClick(false)
  }

  return (
    
    <div className="App">
      <Header winner={winner} />
      <article>
        <Button className="App-button" color='orange' onClick ={handleRollClick} disableClick={disableClick}>던지기</Button>
        <Button className="App-button" color='green' onClick ={handleClearClick}>다시하기</Button>
      </article>
      <div className="Board-box">
        <Board name ='나' color='orange' gameHistory={myHistory}/>
        <Board name ='상대' color='green' gameHistory={otherHistory}/>
      </div>
    </div>
  )
}

export default App;