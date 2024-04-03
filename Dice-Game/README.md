# 주사위 게임 

> 주사위를 던져 옵션에 맞는 조건을 도달하면 승리하는 게임

## 모달창 

![image](https://github.com/Junseong0112/mini-games/assets/108931006/f71e4b52-1382-49a9-8d6d-e82a29479c37)

## 본 페이지

![image](https://github.com/Junseong0112/mini-games/assets/108931006/894bb501-8277-4ba2-95c1-cf4a589a2490)

## 실행

```shell
npm install
npm run start
```

## 사용

| JavaScript |   TypeScript   |  React   |   Redux  |
| :--------: | :------------: | :------: | :------: |
|   ![js]    | ![typescript]  | ![react] | ![redux] |

## 기능

1. 상태관리는 Redux를 이용
2. 모달을 이용해 옵션을 선택할 수 있음
3. 던지기, 다시하기, 옵션 선택 버튼이 있어 언제든지 자유롭게 선택 할 수 있음
4. 게임에서 지거나, 이기게 되면 기존 Text가 변경되어 승자 및 패자를 알려줄 수 있음

## 배포

`Netlify` 이용

<https://dice-options-game.netlify.app/>

## 수정 사항

- JS -> TS 마이그레이션
- 단어 오타 수정 : Code Spell Checker 이용

## 오류 사항

1. `Switch` 문에서 `const`, `let` 키워드 오류
  > 렉시컬 스코프 오류 발견 해결 방법은 블로그에 기재 <https://velog.io/@drawcode0112/React-JS-React-TS-3>

[js]: https://github.com/Junseong0112/mini-games/assets/108931006/bc682460-d9fb-4849-b3df-4698b65f2bab
[react]: https://github.com/Junseong0112/mini-games/assets/108931006/7516e828-9677-4cf6-9323-b481cd9ed9df
[redux]: https://github.com/Junseong0112/mini-games/assets/108931006/55921a46-35ad-4bc6-896c-83366cde5a22
[typescript]: https://github.com/Junseong0112/mini-games/assets/108931006/12c4e8d9-49a2-4850-92fd-4d41987bebf5