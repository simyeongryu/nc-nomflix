import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* 화면의 높이, 너비와 같게 설정 */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 30px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      Loading...😉
    </span>
  </Container>
);
