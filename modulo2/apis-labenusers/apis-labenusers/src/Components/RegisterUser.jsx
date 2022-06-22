import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
  text-align: center;
  align-items: center;

  button {
    margin: 8px 0px;
  }
`;

const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: solid 1px;
  width: 50%;
  height: 140px;
  border-radius: 12px;
`;

class RegisterUser extends React.Component {
  state = {
    user: [],
    inputName: "",
    inputEmail: "",
  };

  registerNewUser = (event) => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "Gabriel-D-oliveira-freire",
          ContentType: "application/json",
        },
      }
    );

    request
      .then((resposta) => {
        alert(`O usuário foi criado`);
        this.setState({ user: resposta.data.result })
        this.setState({inputName:"", inputEmail:""});
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

  handleInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  handleInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  render() {
    return (
      <ContainerMain>
        <h2> Cadastro novo usuário</h2>
        <hr />
        <ContainerForm>
          <input
            placeholder="Nome"
            value={this.state.inputName}
            onChange={this.handleInputName}
          />

          <input
            placeholder="Email"
            type="email"
            value={this.state.inputEmail}
            onChange={this.handleInputEmail}
          />

          <button onClick={this.registerNewUser}>Criar Usuário</button>
        </ContainerForm>
      </ContainerMain>
    );
  }
}

export default RegisterUser;
