import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, serPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await
          axios.get('https://pokeapi.co/api/v2/pokemon/chespin');
        serPokemon(res.data);
        console.log('success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Erro ao caregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, {})

  if (loading) return (
    <div className="loader">
      carregando poquédex...
    </div>
  );
  if (error) return (
    <div className="error">
      cocorreu um erro inesperado
    </div>
  );


  return (
    <div className="App" >
      <h1>poke card</h1>
      <div className="pokemon-container">

        <div className="pokemon-card">
          <div className="nomepokemon">
            <h3>{pokemons.name}</h3>
          </div>
          <div  className="imagen">
          <img src={pokemons.sprites.front_default} alt={pokemons.name} />
          </div>
          <div  className="fundo">
          <img src="/pkemon.jpeg" alt="Imagem de um Pokemon" />
          </div>
          <div className="HP">
            <h3>{pokemons.stats[0].stat.name + ' ' + pokemons.stats[0].base_stat}</h3>
          </div>
          <div className="attack">
            <h3>{pokemons.stats[1].stat.name + ' ' + pokemons.stats[0].base_stat}</h3>
          </div>
          <div className="tipo">
            <h3>{pokemons.types[0].type.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
