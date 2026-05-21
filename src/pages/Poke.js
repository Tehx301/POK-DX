import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poke.css';
import fundocard from "../assets/planta.jpg";
import useFetchPokeapi from "../hooks/useFetchPokeApi";

function Poke() {
  const {pokemons, loading, error} = useFetchPokeapi("chespin"); 

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

          <div className="imagen">
            <img src={pokemons.sprites.front_default} alt={pokemons.name} />
          </div>
          <div className="imagen2">
            <img src={fundocard} alt="Cenário" />
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

export default Poke;