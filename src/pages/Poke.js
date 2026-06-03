import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poke.css';
import TipoInseto from "../assets/fundo_card.jpeg";
import TipoPlanta from "../assets/planta.jpg";
import TipoFantasma from "../assets/Pokemon.jpg";
import TipoSteel from "../assets/metal.jpg";
import atrasdocard from "../assets/fundoDoCard.jpg";
import useFetchPokeapi from "../hooks/useFetchPokeApi";
import { useParams, Await } from "react-router-dom";

function Poke() {
  const { id } = useParams();/* busca o id da uma api */
  const { pokemons, loading, error } = useFetchPokeapi("pokemon",pokemon.id);
const poke = useParams

const [poke,setPokemonIngame] = userState([])
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
 const espacies = async () => {Await axios.get{pokemoes.specie}}
 
const PokemonIngame =
  {
    "nome": pokemons.name,
    "vida": pokemons.stats[0].stat.name,
    "ataque":  pokemons.stats[0].base_stat,
    "tipo": pokemons.stats[1].stat.name,
    "evolucoes": "teste"
  }
}
  let imagemFundo = TipoFantasma;
  if (pokemons.types[0].type.name === 'grass' || pokemons.types[0].type.name === 'insect') {
    imagemFundo = TipoPlanta;
  } else if (pokemons.types[0].type.name === 'ghost') {
    imagemFundo = TipoFantasma;
  } else if (pokemons.types[0].type.name === 'bug') {
    imagemFundo = TipoInseto;
  }
  else if (pokemons.types[0].type.name === 'steel') {
    imagemFundo = TipoSteel;
  }


  return (
    <div className={`pagina-poke tipo-${pokemons.types[0].type.name}`}>
      <div className="TipoPlanta">

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


              <div className="FundoDasCarta">
                <div className="imagenatrascard">
                  <img src={atrasdocard} alt="card" />
                </div>
              </div>
              <div className="imagen2">
                <img src={imagemFundo} alt="Cenário" />
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
      </div>
    </div>


  );
}

export default Poke;