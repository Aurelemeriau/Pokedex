import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() { 

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const handleClickMoins = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  if (pokemonIndex <= 0) {

    return ( <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={handleClickPlus}>Suivant</button>
    </div>
);

    } else if (pokemonIndex < pokemonList.length - 1) {

    return ( <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={handleClickMoins}>Précédent</button>
      <button onClick={handleClickPlus}>Suivant</button>
    </div>
);
  } else if (pokemonIndex < pokemonList.length) {

    return ( <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button onClick={handleClickMoins}>Précédent</button>
    </div>
);
  }  

  return ( <div>
              <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
              <button onClick={handleClickMoins}>Précédent</button>
              <button onClick={handleClickPlus}>Suivant</button>
            </div>
  );

}
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App


