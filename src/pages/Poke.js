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
  const { pokemoes, loading, error } = useFetchPokeapi(id);
  /* const pokemon = useParams */

  /* const [poke,setPokemonIngame] = userState([]) */
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


  let imagemFundo = TipoFantasma;
  if (pokemoes.tipo === 'grass' || pokemoes.tipo === 'insect') {
    imagemFundo = TipoPlanta;
  } else if (pokemoes.tipo === 'ghost') {
    imagemFundo = TipoFantasma;
  } else if (pokemoes.tipo === 'bug') {
    imagemFundo = TipoInseto;
  }
  else if (pokemoes.tipo === 'steel') {
    imagemFundo = TipoSteel;
  }


  return (
    <div className={`pagina-poke tipo-${pokemoes.tipo}`}>
      <div className="TipoPlanta">

        <div className="App" >
          <h1>poke card</h1>

          <div className="pokemon-container">

            <div className="pokemon-card">

              <div className="nomepokemon">
                <h3>{pokemoes.name}</h3>
              </div>

              <div className="imagen">
                <img src={pokemoes.imagen} alt={pokemoes.name} />
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
                <h3>{pokemoes.vida}</h3>
              </div>

              <div className="attack">
                <h3>{pokemoes.ataque}</h3>
              </div>

              <div className="tipo">
                <h3>{pokemoes.tipo}</h3>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>


  );
}

export default Poke;