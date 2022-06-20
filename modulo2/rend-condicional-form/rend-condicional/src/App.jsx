import React from "react";
import DadosGerais from "./components/DadosGerais";
import EnsinoSuperior from "./components/EnsinoSuperior";
import EscolaridadeComplementar from "./components/EscolaridadeComplementar";
import Agradecimento from "./components/Agradecimento";
import styled from "styled-components";

const ContainerGeral = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const AjusteBotao = styled.button`
  margin-top: 20px;

    :hover {
  background-color: aqua;
  color: red;
  }
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;

      case 2:
        return <EnsinoSuperior />;

      case 3:
        return <EscolaridadeComplementar />;

      case 4:
        return <Agradecimento />;

      default:
        return <Agradecimento />;
    }
  };

  irParaProximaEtapa = () => {
    return this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    let botao;
    {      this.state.etapa >= 4
        ? (botao = "")
        : (botao = (
            <AjusteBotao onClick={this.irParaProximaEtapa}>
              Próxima etapa
            </AjusteBotao>
          ));
    }

    return (
      <ContainerGeral>
        {this.renderizaEtapa()}
        {botao}
      </ContainerGeral>
    );
  }
}
