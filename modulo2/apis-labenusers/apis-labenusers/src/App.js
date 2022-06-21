import React from 'react';
import RegisterUser from './Components/RegisterUser';
import UserList from './Components/UserList';


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
      {this.state.tela >= 2 && (<button onClick={this.nextPage}>Trocar de tela</button>) }
      <br/>
      {this.renderPage()}
      </div>
  )};
}

export default App;
