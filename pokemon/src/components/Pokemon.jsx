import { useEffect, useState } from 'react'
function Pokemon({ myPokemon }) {

    const [pok, setPok] = useState(myPokemon);
    const [elPokemon, setElPokemon] = useState('');
    const URL = `https://pokeapi.co/api/v2/pokemon/${myPokemon}`;


    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setElPokemon(data))
            .catch(error => console.log(error));
    }, [URL]);

    console.log(elPokemon)


    return (
        <div>
            <h1>{myPokemon}</h1>
            <h2>{elPokemon.id}</h2>
            {elPokemon && <img src={elPokemon.sprites.front_default} alt="" />}
            {elPokemon && <img src={elPokemon.sprites.back_shiny} alt="" />}
            {elPokemon && <img src={elPokemon.sprites.front_female} alt="" />}

        </div>
    )
}

export default Pokemon