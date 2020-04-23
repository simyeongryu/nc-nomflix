# nc-nomflix

## 계획

### Screens

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

## 셋업

### .env

```
NODE_PATH=src
```

NODE_PATH를 src 지정해뒀기 때문에 기본적으로 src내의 파일들을 읽는다. 컴포넌트를 import 할 때

```js
import App from "./Components/App";
```
가 아니라
```js
import App from "Components/App";
```
이렇게 해도 읽는다.

### 기타 라이브러리 설치

```shell
$ yarn add prop-types react-router-dom styled-components
```

## 2.1 React Router Part One

디렉토리를 구성할 때 내가 구현해야할 페이지들은 Routes 폴더에, 그 Routes 들을 구현할 때 사용할 컴포넌트들은 Componenets 폴더에 넣어 정리해보자.

