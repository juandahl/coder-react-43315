import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [listaPokemons, setListaPokemons] = useState([]);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(pokemons => {
        const result = pokemons.results;

        setListaPokemons(result);
      });
  }, []);

  return (
    <div className="App">
      Pokemones: {listaPokemons.length}

      {listaPokemons.map(pokemon => 
        <div key={pokemon.name}>{pokemon.name}</div>
      )}
    </div>
  );
}

export default App;
