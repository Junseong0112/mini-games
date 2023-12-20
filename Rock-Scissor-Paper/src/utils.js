const HANDS = ['rock', 'scissor', 'paper'];

const WINS = {
  rock : 'scissor',
  scissor : 'paper',
  paper : 'rock',
};

export function compareHand(a, b) {
  // compaerHand(paper, scissor)
  // WINS[a] : rock , b : scissor 같지 않으므로 다음 조건
  if (WINS[a] === b) return 1;
  // WINS[b] : paper , a : paper 같으므로 -1을 리턴
  if (WINS[b] === a) return -1;
  return 0;
};

function random (n) {
  // 0 부터 1사이의 랜덤한수와 3을 곱한값의 소수점 내린 수
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  // 인덱스는 random 함수의 인자는 배열길이값인 3을 전달받음
  const idx = random(HANDS.length);
  // Hand[2] 값인 scissor 가 출력
  return HANDS[idx]
}
