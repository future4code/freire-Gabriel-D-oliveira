import React from "react";
import axios from "axios";
import styled from 'styled-components';

const ContainerMain = styled.div`
    text-align: center;
`

class RegisterUser extends React.Component {
  state = {
    user: [],
    inputName: "",
    inputEmail: "",
  };

   registerNewUser = () => {
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
        ContentType: "application/json"
        },
      }
    );

    request
      .then((resposta) => {
        console.log(resposta);
        alert(`O usuário foi criado`)
        this.setState({user: resposta.data.result});
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
      <div>
        <input
          placeholder="Nome"
          value={this.state.inputName}
          onChange={this.handleInputName}
        />

        <input
          placeholder="Email"
          value={this.state.inputEmail}
          onChange={this.handleInputEmail}
        />

        <button onClick={this.registerNewUser}>Criar Usuário</button>
      </div>
    );
  }
}

export default RegisterUser;
