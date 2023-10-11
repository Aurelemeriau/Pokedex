function NavBar({pokemonList, pokemonIndex, handleClickMoins, handleClickPlus}) {

    if (pokemonIndex <= 0) {

        return (<div>
            <button onClick={handleClickPlus}>Suivant</button>
        </div>
        );

    } else if (pokemonIndex < pokemonList.length - 1) {

        return (<div>
            <button onClick={handleClickMoins}>Précédent</button>
            <button onClick={handleClickPlus}>Suivant</button>
        </div>
        );
    } else if (pokemonIndex < pokemonList.length) {

        return (<div>
            <button onClick={handleClickMoins}>Précédent</button>
        </div>
        );
    }

    return (<nav>
        <button onClick={handleClickMoins}>Précédent</button>
        <button onClick={handleClickPlus}>Suivant</button>
    </nav>
    );
}

export default NavBar;
