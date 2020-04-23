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