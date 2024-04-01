# 가위 바위 보

> 가위 바위 보 미니게임, 배점을 올려서 총합 50점을 먼저 도달한 사람이 이기는 게임.

![main-project](https://github.com/Junseong0112/mini-games/assets/108931006/42317c6e-103d-43ea-8d7c-2ec5aecd746a)

## 실행

```shell
npm install
npm run start
```

## 사용

| React | JavaScript | TypeScript |
| ----- | ---------- | ---------- |
| ![react](https://github.com/Junseong0112/mini-games/assets/108931006/7516e828-9677-4cf6-9323-b481cd9ed9df) | ![javascript](https://github.com/Junseong0112/mini-games/assets/108931006/bc682460-d9fb-4849-b3df-4698b65f2bab) | ![typescript](https://github.com/Junseong0112/mini-games/assets/108931006/12c4e8d9-49a2-4850-92fd-4d41987bebf5) |

## 기능

1. 배점을 총합하여 점수판에 현황으로 표시
2. 모달을 이용해 게임 설명을 표시
3. 가위 바위 보 버튼을 이용해 무승부, 승리, 패배를 로그에 기록
4. 총합을 도달하여 이기거나 지는 표시를 `alert` 으로 표시

## 시연 영상

![project](https://github.com/Junseong0112/mini-games/assets/108931006/ea54ea99-2b5c-4d53-b008-a6e94c0b65d0)

## 배포

`Netilfy` 이용

<https://rock-scissor-paper-games.netlify.app>

## 수정 사항

- JS -> TS 마이그레이션
- 단어 오타 수정 : Code Spell Checker 이용

## 오류 사항

1. eslint, prettier 기존 프로젝트 설치시 종속성 오류
  > 기존에 프로젝트 진행하다 npm 오류를 접했다. 찾아보니 종속성 오류기 때문에 기존 패키지가 깔리지 않아 build 하는 과정에서 계속 오류가 나왔다. `--force` 명령어를 입력하여 종속성 충돌을 해결하였다.
