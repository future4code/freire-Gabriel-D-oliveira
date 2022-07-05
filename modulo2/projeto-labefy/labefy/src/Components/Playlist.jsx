import React from "react";
import axios from 'axios';

class PlaylistDetailed extends React.Component {
  state = {
   playlist: [],
    inputPlaylist: "",
  };

  componentDidMount = () => {
    this.createPlaylist();
  };
  

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputPlaylist,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "Gabriel-D-oliveira-freire",
          ContentType: "application/json",
        },
      })
      .then((response) => {
        alert(`Playlist foi criada com sucesso!!`);
        this.setState({ playlist: response.data.result, inputPlaylist: "" });
      })
      .catch((error) => {
        alert(`Erro ${error.message}`);
      });
  };

  handleInputPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value})
  }

  render() {
    return <div>
        <div>
        <h4>Crie a playlist com a sua cara!</h4>

        <input
        placeholder="Nome"
        value={this.state.inputPlaylist}
        onChange={this.handleInputPlaylist}/>

        <button onClick={this.createPlaylist}>Criar</button>
        </div>
        <div>
            <p>{this.state.playlist.name}</p>
        </div>

    </div>;
  }
}
 export default Playlist