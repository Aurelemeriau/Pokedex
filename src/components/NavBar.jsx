

function NavBar({pokemonList, pokemonIndex, setPokemonIndex}) {

    const handleClick = (arg, pokemonName) => {
        setPokemonIndex(arg)
        setTimeout(() => {
            if(pokemonName === "pikachu")
            alert("pika pikachu !!!")
        })
    }
      
   return (
    <div>
        {pokemonList.map((pokemon, index) =>(
            <button onClick={() => {handleClick(index, pokemon.name) } } key={index} >
            {pokemon.name}
            </button>
        ))}
    </div>
   )

};

export default NavBar;
