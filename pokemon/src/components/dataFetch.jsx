import { useState, useEffect } from 'react'
import ListLinks from './listLinks'
import Pokemon from './Pokemon'
const DataFetch = () => {
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");
    const [elPokemon, setElPokemon] = useState('');
    //const [offset, setOffset] = useState(0);
    //const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`);
    const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
                setNext(data.next)
                setPrevious(data.previous)
            })
            .catch(error => console.log(error));
    }, [apiUrl]);

    const siguiente = () => {
        // setOffset(offset + 5);
        next && setApiUrl(next);

    };
    const anterior = () => {
        //if (offset === 0) return;
        //  setOffset(offset - 5);
        previous && setApiUrl(previous);
    };
    const pokisChange = (pokemon) => {
        setElPokemon(pokemon)
        console.log(pokemon)

    }
    return (
        <>
            <div className="div-linksPokemon">
                {pokemons.map((pokemon) => (
                    <button key={pokemon.name} onClick={() => setElPokemon(pokemon.name)}><h3>{pokemon.name}</h3></button>
                ))}
            </div>
            <div className='div-buttons'>
                <button disabled={!previous} onClick={anterior}>Anterior</button>
                <button disabled={!next} onClick={siguiente}>Siguiente</button>
            </div>

            {elPokemon && <Pokemon myPokemon={elPokemon} />}
        </>
    );
};

export default DataFetch; 