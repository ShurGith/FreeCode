
const ListLinks = (pokemons) => {
    const pokisChange = (pokemon) => {
        console.log(pokemon)
    }

    return (
        <>
            <div className="div-linksPokemon">
                {pokemons.pokemons.map((pokemon) => (
                    <button key={pokemon.name} onClick={() => pokisChange(pokemon.name)}><h3>{pokemon.name}</h3></button>
                ))}
            </div>
        </>
    )
}

export default ListLinks;