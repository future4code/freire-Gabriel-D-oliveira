import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ContainerNewPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px 0px;
  border: 1px solid black;
  
`;

const InputStyle = styled.input`
  width: 200px;
  height: 25px;
  margin: 10px 0px;
  border: 1px solid black;
`;

const PostButton = styled.button`
  margin: 10px 0px;
  height: 20px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
      {
        nomeUsuario: "Lukas Silva",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=2",
      },
      {
        nomeUsuario: "Marina Santos",
        fotoUsuario: "https://picsum.photos/50/50?random=10",
        fotoPost: "https://picsum.photos/200/150?random=3",
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

    const todosOsPosts = [...this.state.posts, novoPost];

    this.setState({ posts: todosOsPosts });

    this.setState({
      valorNomeUsuario: "",
      valorFotoUsuario: "",
      valorFotoPost: "",
    });
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
        <ContainerNewPost>
          <h2>Novo post</h2>
          <InputStyle
            value={this.state.valorNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder="Nome"
          />
          <InputStyle
            value={this.state.valorFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder="Foto do Usuário"
          />
          <InputStyle
            value={this.state.valorFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder="Post"
          />
          <PostButton onClick={this.adicionaPost}>Postar</PostButton>
        </ContainerNewPost>
        {listaPostsUsuarios}
      </MainContainer>
    );
  }
}

export default App;
