import { useState } from 'react'

function NavBar({pokemonList, pokemonIndex, setPokemonIndex}) {


    const handleClick = (pokemonIndex) => {
        setPokemonIndex(pokemonIndex)
    }

   return (
    <div>
        {pokemonList.map((pokemon, index) =>(
            <button onClick={() => {handleClick(index)}} key={index}>
            {pokemon.name}
            </button>
        ))}
    </div>
   )

};

export default NavBar;
