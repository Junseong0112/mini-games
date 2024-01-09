import Board from "./Board";
import Button from "./Button"
import {useState} from 'react'
import './App.css'

function random(n) {
  return Math.ceil(Math.random() * n);
};
function App () {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum])
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    
    <div className="App">
      <div>
        <Button className="App-button" color='orange' onClick ={handleRollClick}>던지기</Button>
        <Button className="App-button" color='green' onClick ={handleClearClick}>다시하기</Button>
      </div>
      <div>
        <Board name ='나' color='orange' gameHistory={myHistory}/>
        <Board name ='상대' color='green' gameHistory={otherHistory}/>
      </div>
    </div>
  )
}

export default App;