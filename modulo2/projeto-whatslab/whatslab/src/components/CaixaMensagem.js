import React from "react";
import styled from "styled-components";

const EnviarMensagem = styled.div`
  display: flex;
  justify-content: space-around;
  height: 35px;
  margin-bottom: 16px;
  width: 600px;
`;
const InputUsuario = styled.input`
  width: 15%;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
`;
const InputMensagem = styled.input`
  width: 60%;
  border-radius: 5px;
  border: none;
  padding-left: 5px;
`;
const StyleButton = styled.button`
  width: 15%;
  border-radius: 5px;
  border: none;
`;
const StyleResposta = styled.p`
  background-color: white;
  width: 80%;
  height: 30px;
  margin-left: 18px;
  padding-left: 5px;
  border-radius: 5px;
`;

class CaixaMensagem extends React.Component {
  state = {
    mensagens: [],

    valorInputRemetente: "",
    valorInputMensagem: "",
  };

  AddMessage = () => {
    const novaMensagem = {
      remetente: this.state.valorInputRemetente,
      conteudo: this.state.valorInputMensagem,
    };

    const listaMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: listaMensagens });

    this.setState({
      valorInputRemetente: "",
      valorInputMensagem: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputRemetente: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const historicoConversa = this.state.mensagens.map((pessoa) => {
      return (
        <StyleResposta>
          <b>{pessoa.remetente}:</b> {pessoa.conteudo}
        </StyleResposta>
      );
    });

    return (
      <div>
        {historicoConversa}
        <EnviarMensagem>
          <label for="usuario" />
          <InputUsuario
            value={this.state.valorInputRemetente}
            onChange={this.onChangeInputUsuario}
            placeholder="Usuário"
            id="usuario"
          />
          <label for="mensagem" />
          <InputMensagem
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder="Mensagem"
            id="mensagem"
          />
          <StyleButton onClick={this.AddMessage}>Enviar</StyleButton>
        </EnviarMensagem>
      </div>
    );
  }
}
export default CaixaMensagem;
