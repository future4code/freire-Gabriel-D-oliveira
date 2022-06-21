import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
  text-align: center;
`;

class UserList extends React.Component {
  state = {
    nameUser: [],
    userId: "",
  };

  componentDidMount = () => {
    this.getListaUsuarios();
  };

 
  getListaUsuarios = () => {
    const request = axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Gabriel-D-oliveira-freire",
            ContentType: "application/json",
          },
        }
      )

      .then((resposta) => {
        console.log(resposta.id);
        this.setState({ nameUser: resposta.data });
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

 
  render() {
    const listaNomeUsuario = this.state.nameUser.map((usuario) => {
      return (
        <p key={usuario.id}>
          {usuario.name}{" "}
          <button>X</button>
        </p>
      );
    });

    return (
      <div>
        <h1>Lista de usuários</h1>
        {listaNomeUsuario}
      </div>
    );
  }
}

export default UserList;
