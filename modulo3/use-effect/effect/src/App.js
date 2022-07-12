import React, { useState, useEffect} from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard/PokeCard";
import './App.css';

function App()  {
  const [pokelist, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")
  
  
 const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        console.log(response.data.results)
        setPokelist(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemons()

  },[] )

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

   
    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokeName={pokeName} />}
      </div>
    );
  
}

export default App;