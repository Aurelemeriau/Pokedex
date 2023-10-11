import PropTypes from "prop-types";

function PokemonCard ({pokemon}) {

  // console.log(props);

  // const pokemon = props.pokemon;

  return pokemon && pokemon.imgSrc ? (

    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  ) : (
    <div>
      <p>???</p>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );
}

  // if (pokemon.imgSrc === "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png") { 

  //  return <figure>
  //           <img src={pokemon.imgSrc}></img>
  //           <figcaption>{pokemon.name}</figcaption>
  //         </figure>
  // } else {
  //   return <figure>
  //            <p>???</p>
  //            <figcaption>{pokemon.name}</figcaption>
  //          </figure>
    
  // }
// }

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}

export default PokemonCard;