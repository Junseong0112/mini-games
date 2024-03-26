# 틱택토

> 두 명이 번갈아가며 "O" 와 "X" 같은 글자를 3 X 3 가로, 세로, 혹은 대각선에 3개를 잇는 게임.

![main-project](https://github.com/Junseong0112/mini-games/assets/108931006/ef084959-6630-4ee1-91a3-231c70e4357a)

## 실행

```shell
npm install
npm run dev
```

## 사용

| React | JavaScript | TypeScript |
| ----- | ---------- | ---------- |
| ![react](https://github.com/Junseong0112/mini-games/assets/108931006/7516e828-9677-4cf6-9323-b481cd9ed9df) | ![javascript](https://github.com/Junseong0112/mini-games/assets/108931006/bc682460-d9fb-4849-b3df-4698b65f2bab) | ![typescript](https://github.com/Junseong0112/mini-games/assets/108931006/12c4e8d9-49a2-4850-92fd-4d41987bebf5) |

## 기능

1. 플레이어 이름 수정
2. 0, X를 통해 게임을 진행 가로, 세로 혹은 대각선으로 3줄 나란히 채울시 승리
3. 사용자의 선택한 지점을 Log로 기록해 반환

## 배포

`Netilfy` 이용

<https://tictactoe-mini-games.netlify.app/>

## 수정 사항

- 기본 JS -> TS 로 전환함

## 오류 사항

- TypeScript 사용시 img파일 import 오류
  > 찾아보니 기본적으로 TypeScript에서 PNG 파일을 직접 import하는 것은 기본적으로 지원되지 않는다. 자바스크립트만 컴파일러 하기 떄문이다. CRA 프로젝트 같은경우 웹팩에서 자동적으로 번들링하기에 별도의 설정이 필요없지만 Vite를 사용하여 custom.d.ts 파일에 이미지 확장자를 모듈로 인식하게 설정하여 TypeScript 컴파일러가 이미지 파일을 모듈로서 이해하고, 해당 파일을 import하여 사용할 수 있게 된다.

## 참조

Udemy - React 강의
