import logo from "./logo.svg";
import React from "react";
import styled from "styled-components";
import CaixaMensagem from "./components/CaixaMensagem";

const ContainerBody = styled.body`
  display: flex;
  justify-content: center;
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 40%;
  height: 100vh;

  border: 1px solid black;
  background-color: #80808040;
`;

class App extends React.Component {
  render() {
    return (
      <ContainerBody>
        <ContainerMain>
          <CaixaMensagem />
        </ContainerMain>
      </ContainerBody>
    );
  }
}

export default App;
