import React from 'react';
import RegisterUser from './Components/RegisterUser';
import UserList from './Components/UserList';
import styled from 'styled-components';

const BotaoRenderPage = styled.div `
display: flex;
justify-content: center;
margin: 6px 0px;

`


class App extends React.Component {

state = {
  tela:2

}

renderPage = () => {
  if(this.state.tela % 2 === 0) {
      return <RegisterUser/>;
   } else {
    return <UserList/>
   }
  }

  nextPage = () =>  {
    this.setState({tela: this.state.tela + 1})
  }

render (){

  return (
    <div> 
      <BotaoRenderPage>     
      {this.state.tela >= 2 && (<button onClick={this.nextPage}>Trocar de tela</button>) }
      </BotaoRenderPage>
      {this.renderPage()}
      
      </div>
  )};
}

export default App;
