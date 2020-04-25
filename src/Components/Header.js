import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#c23616" : "transparent")};
  transition: border-bottom 0.1s ease-in-out;
`;

// react-router-dom 에서 정의된 Link에 스타일 컴포넌트를 사용할 때
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// props의 location 속 pathname을 가져와서 그 경로에 따른 style
export default withRouter(({ location: { pathname } }) => (
  // Header는 Route가 아니기 때문에
  // Router에서 location 정보를 받을 수 없다.
  // 그래서 withRouter를 사용한다.
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
