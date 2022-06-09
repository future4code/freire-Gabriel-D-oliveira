import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContainerNewPost = styled.input`
  width: 300px;
  margin: 10px 0px;
  border: none;
  border-bottom: 1px solid gray;
`;

const PostButton = styled.button`
margin: 10px 0px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Lukas Silva",
        fotoUsuario: "https://picsum.photos/50/53",
        fotoPost: "https://picsum.photos/200/155",
      },
      {
        nomeUsuario: "Marina Santos",
        fotoUsuario: "https://picsum.photos/50/55",
        fotoPost: "https://picsum.photos/200/154",
      },
    ],

    valorNomeUsuario: "",
    valorFotoUsuario: "",
    valorFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost,
    };
    this.setState({
      valorNomeUsuario: "",
      valorFotoUsuario: "",
      valorFotoPost: "",
    });

    const todosOsPosts = [...this.state.posts, novoPost];

    this.setState({ posts: todosOsPosts });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ valorFotoUsuario: event.target.value });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorNomeUsuario: event.target.value });
  };
  onChangeFotoPost = (event) => {
    this.setState({ valorFotoPost: event.target.value });
  };

  render() {
    const listaPostsUsuarios = this.state.posts.map((usuario, index) => {
      return (
        <div key={index}>
          <Post
            fotoUsuario={usuario.fotoUsuario}
            nomeUsuario={usuario.nomeUsuario}
            fotoPost={usuario.fotoPost}
          />
        </div>
      );
    });

    return (
      <MainContainer>
        <ContainerNewPost
          value={this.state.valorNomeUsuario}
          onChange={this.onChangeNomeUsuario}
          placeholder="Nome"
        />
        <ContainerNewPost
          value={this.state.valorFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder="Foto do Usuário"
        />
        <ContainerNewPost
          value={this.state.valorFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder="Post"
        />
        <PostButton onClick={this.adicionaPost}>Postar</PostButton>

        {listaPostsUsuarios}
      </MainContainer>
    );
  }
}

export default App;
