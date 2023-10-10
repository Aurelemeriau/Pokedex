import PropTypes from "prop-types";

function PokemonCard (props) {

  console.log(props);

  const pokemon = props.pokemon;

  if (pokemon.imgSrc === "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png") { 

   return <figure>
            <img src={pokemon.imgSrc}></img>
            <figcaption>Bulbasaur</figcaption>
          </figure>
  } else {
    return <figure>
             <p>???</p>
             <figcaption>Mew</figcaption>
           </figure>
    
  }
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}

export default PokemonCard;