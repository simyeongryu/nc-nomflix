# nc-nomflix

## 계획

### Screens

- [ ] Home
- [ ] TV Shows
- [ ] Search
- [ ] Detail

### API Verbs

- [x] Now Playing (only Movies)
- [x] Upcoming (Movies)
- [x] Top Rated (TV, Movies)
- [x] Popular (TV, Movies)
- [x] Airing Today (TV)
- [ ] TV detail
- [ ] Movie Detaul

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

`<Switch>` 컴포넌트를 사용하면 그 하위에 있는 `<Route>` 컴포넌트 중에 매치되는 제일 첫번째 컴포넌트만 보여주고, 그 이후에 나오는 Route 컴포넌트는 매치되더라도 무시됩니다. 이때, `<Route>` 컴포넌트의 순서가 중요하다

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

### 404 페이지

특정한 404 페이지를 보여줘야 할 경우, `<Switch>`로 모든 `<Route>` 컴포넌트로 묶어준다. 그 다음 `path prop`이 없는 `<Route> `컴포넌트를 하나 추가하고 404 컴포넌트를 할당한다. 그러면 자연스럽게 위에 나온 `<Route>` 중에 매치되는 것이 없을 시 마지막 `<Route>` 컴포넌트가 매치되어 404 페이지가 보여진다

## 3.0 CSS in React part One

첫 번째. 

css 파일을 만들어서 필요한 부분에 import

그런데 컴포넌트와 CSS가 분리되어 있으면 굉장히 불편하다.

또 컴포넌트는 최대한 캡슐화되어야 한다.

JS, 로직, CSS 등이 모두 있는 게 좋다.

그래서 사용하는 게 `styled-components`

## 3.1 CSS in React part Two

## 3.2 CSS in React part Two

```shell
$ yarn add styled-components
```

```js
import styled from "styled-components";
import s{ Link } from "react-router-dom";

const Sth = styled.HTMLtag`
  CSS: 내용;
`;

const RRD = styled(Link)`
  CSS: 내용;
`;
```

```js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

// react-router-dom 에서 정의된 Link에 스타일 컴포넌트를 사용할 때
const SLink = styled(Link)``;

export default () => (
  <Header className="nav">
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">SEARCH</SLink>
      </Item>
    </List>
  </Header>
);
```

## 3.3 GlobalStyles and Header

글로벌 스타일 컴포넌드

사이트의 폰트를 설정하거나 등

```shell
$ yarn add styled-reset
```

Components 폴더에 `GlobalStyles.js` 라는 폴더 생성

아래 내용 작성

```js
// 전역 스타일. 즉 reset.css
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background-color: rgba(20, 20, 20, 1);
  }
`;

export default globalStyles;
```

App.js에 아래 내용 작성

```js
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}
```

## 3.4 Location Aware Header

스타일 컴포넌트도 컴포넌트여서 props를 전달할 수 있다.

```js
const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid ${props => (props.current ? "#c23616" : "transparent")};
`;
```
```js
<Item current={true}>
        <SLink to="/search">SEARCH</SLink>
      </Item>
```

withRouter
```js
import { Link, withRouter } from "react-router-dom";
```

컴포넌트를 감싸는 컴포넌트

props에 접근 할 수 있다.

withRouter가 Header라는 컴포넌트를 감싼 형태이기 때문에 Header는 props를 받을 수 있다.

```js
// props의 location 속 pathname을 가져와서 그 경로에 따른 style
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">SEARCH</SLink>
      </Item>
    </List>
  </Header>
));
```
Link없이 다른 컴포넌트들과 연결할 수 있다.

## 4.0 Introduction to The Movie DB API

https://www.themoviedb.org/settings/api

회원가입, 로그인

API key v3 auth 사용

9a8525c940f5235964bb5e78513b8720

## 4.1 Sexy Networking with Axios Instances

```shell
$ yarn add axios
```

axios 로 반복되는 부분 처리하면서 fetch 하기

```js
import axios from "axios";
// api 호출 시 반복되는 부분들을 한 번에 처리하기 위해
// instance를 설정해준다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
// '/tv/popular'처럼 '/'로 시작하면 절대경로로 가져오기 때문에 안 된다.
api.get("tv/popular", {
  params: {
    api_key: "9a8525c940f5235964bb5e78513b8720",
    language: "en-US"
  }
});

export default api;
```

append_to_response: 해당 영화나 TV show의 예고편 등등을 불러온다.

### 자바스크립트에서 인코딩하기
```js
encodeURIComponent(term);
```

## 5.0 Container Presenter Pattern part One

컨테이너 프레젠터 패턴

컨테이너는 데이터와 스테이트를 갖고 api를 불러온다.

프리젠터는 스테이트없고 클래스도 없고 api랑도 상관없는 함수형 컴포넌트

page를 표현할 때 데이터 핸들링과 스타일 렌더링을 나눠서 작성하는 패턴.

page에 해당하는 폴더를 만들고 index를 만들고 컴테이너와 프레젠터를 만든다.

