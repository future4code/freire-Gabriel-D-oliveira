import axios from "axios";
import React from "react";
// import Playlist from './Components/Playlist'

const autoHeaders = {
  Authorization: "Gabriel-D-oliveira-freire",
  ContentType: "application/json",
};

class App extends React.Component {
  state = {
    currentPage: "home",
    playlist: [],
    inputPlaylist: "",
  };

  // changePage = () => {
  //   if (this.state.currentPage !== "home") {
  //     return alert("vou criar outra page")
  //   }
  //   this.setState({ currentPage: "" })
  // }

  componentDidMount= () =>{
    this.getPlaylist()
  }

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputPlaylist,
    };
    const request = axios
      .post(url, body, {
        headers: autoHeaders,
      })
      .then((response) => {
        alert(`Playlist foi criada com sucesso!!`);
        console.log(response.data);
        this.setState({ playlist: response.data.result, inputPlaylist: "" });
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

  getPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const request = axios
      .get(url, {
        headers: autoHeaders,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ playlist: response.data.result.list });
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

  handleInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  render() {

    const playlistFiltrada = this.state.playlist.map((lista) => {
      return <p key={lista.id}>{lista.name}</p>
    })
    
    return (
      <div>
        <nav>
          <li>Home</li>
          <li>Search</li>
          <li>Create Playlist</li>
        </nav>

        <section>
          <div>
            <h4>Crie a playlist com a sua cara!</h4>

            <input
              placeholder="Nome"
              value={this.state.inputPlaylist}
              onChange={this.handleInputPlaylist}
            />

            <button onClick={this.createPlaylist}>Criar</button>
          </div>
          <hr />
          <div>
            {playlistFiltrada}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
