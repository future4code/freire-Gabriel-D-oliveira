import React from "react";
import styled from "styled-components";
import axios from "axios";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #dedede;

  button {
    padding-left: 6px;
    padding-right: 6px;
  }

`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <button onClick={() => props.changePageToProfile()}>Return</button>
      <h3>AstroMatch</h3>
      <button onClick={() => props.changePageToMatches()}>Matches</button>
    </HeaderContainer>
  );
};
