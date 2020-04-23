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

## 2.2 React Router part Two

### HashRouter

해쉬 라우터로 하면 url에 #이 붙는다. 

그게 싫으면 BrowserRouter를 사용한다.

브라우저라우터는 HTML histort api 를 사용하고 해쉬라우터는 페이지의 해쉬를 사용한다.

앱처럼 보이게 하고 싶으면 해쉬, 웹처럼 보이려면 브라우저. 근데 기능은 거의 비슷하다.

### Composition

두 개 이상의 Router을 동시에 라우팅한다.

```js
export default () => (
  <Router>
    <Route path="/tv" component={TV} />
    <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
  </Router>
);
```
이 상태에서 /tv/popular에 접근하면 두 개의 Route가 모두 render 된다.

어떤 경로에 접근했을 때 하나의 Route만 렌더링 되게 하려면 `Switch`를 사용해야한다. 

```js
<Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tv" component={TV} />
      <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
      <Route path="/search" component={Search} />
      {/* 위에 지정하지 않은 경로로 접근하면 /으로 이동 */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
```