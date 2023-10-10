function PokemonCard (props) {

  console.log(props);

  const pokemon = props.pokemon;

  if (pokemon.imgSrc === "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png") { 

   return <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
            <figcaption>Bulbasaur</figcaption>
          </figure>
  } else {
    return <figure>
             <p>???</p>
             <figcaption>Mew</figcaption>
           </figure>
    
  }
}


export default PokemonCard;