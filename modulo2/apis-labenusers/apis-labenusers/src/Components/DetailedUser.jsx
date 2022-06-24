import React from "react";
import axios from "axios";
import styled from "styled-components";

class DetailedUser extends React.Component {
  state = {
    userDetail: {},
    userEdit: "",
    name: "",
    email: "",
  };

  componentDidMount = () => {
    this.getDetailFromUser();
  };

  getDetailFromUser = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`;
    axios.get(url, {
        headers:{
            Authorization: "Gabriel-D-oliveira-freire"
        }
    }).then ((response) => {
        this.setState({userDetail: response.data})
    }).catch((erro) =>{
        alert(`Error: ${erro.message}`)
    })

};

  render() {
    return <div>
    <div>
      <p>{this.state.userDetail.name}</p>
      <p>{this.state.userDetail.email}</p>
    </div>
    <hr />
    <button>
      Voltar para lista de usuários
    </button>
  </div>;
  }
}

export default DetailedUser
