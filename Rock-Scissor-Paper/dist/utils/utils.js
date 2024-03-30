// 서로의 초기값이 같아 상수로 따로 저장해 추후에 수정시 용이함
export const INITIAL_VALUE = 'rock';
const HANDS = ['rock', 'scissor', 'paper'];
const WINS = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock',
};
export function compareHand(a, b) {
    // compareHand(paper, scissor)
    // WINS[a] : rock , b : scissor 같지 않으므로 다음 조건
    if (WINS[a] === b)
        return 1;
    // WINS[b] : paper , a : paper 같으므로 -1을 리턴
    if (WINS[b] === a)
        return -1;
    return 0;
}
function random(n) {
    // 0 부터 1사이의 랜덤한수와 3을 곱한값의 소수점 내린 수
    return Math.floor(Math.random() * n);
}
export function generateRandomHand() {
    // 인덱스는 random 함수의 인자는 배열길이값인 3을 전달받음
    const idx = random(HANDS.length);
    // Hand[2] 값인 scissor 가 출력
    return HANDS[idx];
}
export function getResult(me, other) {
    // me : paper , other : scissor
    // utils.js compareHand(paper, scissor)
    const comparison = compareHand(me, other);
    // compareHand 함수의 값은 같지 않았기에 -1
    // -1이 0보다 크지 않기에 조건에 부합되지않음
    if (comparison > 0)
        return '승리';
    // -1이 영보다 작기에 조건에 부합 따라서 패배를 리턴
    if (comparison < 0)
        return '패배';
    return '무승부';
}
