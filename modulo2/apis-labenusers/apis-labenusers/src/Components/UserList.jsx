import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetailedUser from "./DetailedUser";

const ContainerLista = styled.div`
  margin: auto;
  margin-top: 20px;
  border: solid 1px;
  border-radius: 12px;
  width: 50%;
  text-align: center;
`;

const ContainerSubDivisao = styled.section`
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
  text-align: center;
  align-items: center;
`;

class UserList extends React.Component {
  state = {
    nameUser: [],
    userId: "",
    page: "userlist",
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
        console.log(resposta);
        console.log(resposta.data.id);
        this.setState({ nameUser: resposta.data });
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

  deleteUsuario = (id) => {
    if (window.confirm("Realmente deseja apagar o usuário?") === true) {
      const request = axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "Gabriel-D-oliveira-freire",
              ContentType: "application/json",
            },
          }
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.getListaUsuarios();
        })
        .catch((e) => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };
  

  changeToDetailPage = (userId) => {
    if (this.state.page !== "userlist") {
      return <DetailedUser 
      getDetailFromUser={this.ge} />;
    }
    this.setState({page: "", userId: userId})
  };

  render() {
    const listaNomeUsuario = this.state.nameUser.map((usuario) => {
      return (
        <li key={usuario.id}>
          <span onClick={() => this.changeToDetailPage(usuario.id)}>
            {usuario.name}{" "}
          </span>
          <button onClick={() => this.deleteUsuario(usuario.id)}>X</button>
        </li>
      );
    });

    return (
      <div>
        {this.state.page === "userlist" ? (
          <ContainerLista>
            <h2>Lista de usuários</h2>
            <ContainerSubDivisao>{listaNomeUsuario}</ContainerSubDivisao>
          </ContainerLista>
        ) : (
          <DetailedUser
          userId={this.state.userId}
          />
        )}
      </div>
    );
  }
}

export default UserList;
