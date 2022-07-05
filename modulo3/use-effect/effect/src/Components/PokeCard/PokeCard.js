import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard({pokeName}) {

    const [pokemons, setPokemons] = useState({})


    const pegaPokemon = (pokeName) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                console.log(response.data);
                setPokemons(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        pegaPokemon(pokeName)

    }, [pokeName])

    return (
        <div>
            <p>{pokemons.name}</p>
            <p>{pokemons.weight} Kg</p>
            {pokemons.types && <p>{pokemons.types[0].type.name}</p>}
            {pokemons.sprites && (
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            )}
        </div>
    );
}


export default PokeCard;
