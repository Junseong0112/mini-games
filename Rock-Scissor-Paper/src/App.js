import { useState } from 'react'
import HandButton from './HandButton'
import Button from './Button';
import HandIcon from './HandIcon';
import Score from './Score';
import { compareHand, generateRandomHand } from './utils';
import './styles/App.css'
import Modal from './Modal';

// 서로의 초기값이 같아 상수로 따로 저장해 추후에 수정시 용이함 
const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  // me : paper , other : scissor
  // utils.js compareHand(paper, scissor)
  const comparison = compareHand(me, other);
  // compareHand 함수의 값은 같지 않았기에 -1
  // -1이 0보다 크지 않기에 조건에 부합되지않음
  if (comparison > 0) return '승리';
  // -1이 영보다 작기에 조건에 부합 따라서 패배를 리턴
  if (comparison < 0) return '패배';
  return '무승부'
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [showModal, setShowModal] = useState(true);

  // 모달

  const closeModal = () => {
    setShowModal(false)
  }

  const handleButtonClick = (nextHand) => {
    // utils.js에 있는 generateRandomHand 함수 상수에 저장
    const nextOtherHand = generateRandomHand();

    // 승리 또는 무승부 또는 패배를 전달 받기위한 함수를 상수에 저장
    const nextHistoryItem = getResult(nextHand, nextOtherHand)

    // utils.js에 있는 compaerHand 함수는 양쪽의 값을 비교했을 때 0 , 1 , -1이 나오는 값을 상수에 저장
    const comparison = compareHand(nextHand, nextOtherHand)

    // 아규먼트로 paper를 전달 setHand는 paper로 상태변경
    setHand(nextHand);
    
    // setOtherHand  실행 값은 scissor로 상태변경
    setOtherHand(nextOtherHand);

    // 배열안에 결과값들을 새로운 배열로 반환하기 위해서는 스프레드 구문을이용해서 반환해야함
    setGameHistory([...gameHistory, nextHistoryItem])

    // compareHand에서 1이 나올 경우 기존 스코어 숫자 더하기 input에 있는 value 값을 더함
    if (comparison > 0) setScore (score + bet);

    // compareHand에서 -1이 나올 경우 상대방 스코어 수 더하기 input에 있는 value 값을 더함
    if (comparison < 0) setOtherScore(otherScore + bet);

    if(score >= 50){
      alert('축하합니다! 게임에서 이겼습니다.')
      handleClearClick();
    }else if(otherScore >= 50){
      alert('아쉽지만! 게임에서 지셨어요.')
      handleClearClick();
    }
  };
  
  const handleClearClick = () => {
    // 상태변경을 기존에 값인 rock으로 변경
    setHand('rock');
    setOtherHand('rock')
    setGameHistory([]);
    setScore(0)
    setOtherScore(0)
    setBet(1)
  }
  
  const handleBetChange = (e) => {
    // 특히 잘못된 문자열을 입력하는 경우에는 e.target.value 의 값이 빈 문자열이 되기 때문에 Number(e.target.value) 의 값은 0이 됩니다. 그래서 저는 아래 예시처럼 나머지 연산과 내림 연산으로 1과 9 사이의 정수를 만들어주었습니다.
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  }
  
  return (
    <div id='App'>
      {showModal && <Modal closeModal={closeModal} />}
      <main id='Main'>
        {/* handleClearClick 함수를 실행 */}
        <header className='App-header'>
          <h2 className='App-heading'>가위 바위 보</h2>
          <Button className='App-reset' onClick={handleClearClick}></Button> 
        </header>
        <Score score={score} otherScore={otherScore} />
        <section className='App-borads'>
          <div className='Box-inner'>
            <div className='Borads-inner'>
              {/* paper */}
              <div className='Hand'>
                <HandIcon value={hand} />
              </div>
              <p className='Borads-vs'>VS</p>
              {/* scissor */}
              <div className='Hand'>
                <HandIcon value={otherHand} />
              </div>
            </div>
            <div className='Borads-inputs'>
              <span>배점</span>
              <input type='number' value={bet} step={1} min={1} max={9} onChange={handleBetChange} />
              <span>배</span>
            </div>
            <div className='Borads-result'>
              <h3>승부 기록</h3>
              <p>{gameHistory.join(', ')}</p>
            </div>
          </div>
        </section>
        <div>
          <HandButton value='rock' onClick = {handleButtonClick} />
          <HandButton value='scissor' onClick = {handleButtonClick} />
          {/* paper를 눌렀을 때 */}
          <HandButton value='paper' onClick = {handleButtonClick} /> 
        </div>
      </main>
    </div>
  );
}

export default App;
