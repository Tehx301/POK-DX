import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poke.css';
import { Link } from "react-router-dom";
import useFetchPokeapi from "../hooks/useFetchPokeApi";
import { useParams } from "react-router-dom";

function Poke() {
  const { id } = useParams();/* busca o id da uma api */
  const { pokemoes, loading, error, fumdo, evolution } = useFetchPokeapi(id);



  if (loading) return (
    <div className="loader">
      espera se não nasceu  de 6 meses...
    </div>
  );
  if (error) return (
    <div className="error">
      acho que não foi...
    </div>
  );


       


  return (


    <div className="App">
      <h1>poke card</h1>
      <div className={`pokemon-container tipo-${pokemoes.tipo}`}>

        <div className="pokemon-card">
          <div className="imagen">
            <img src={pokemoes.imagen} />

           <button>{evolution}</button>

            <div className="imagen2">
              <img src={fumdo} alt="fundo" />
            </div>


            <div className="nomepokemon">
              <p>{pokemoes.nome}</p>
            </div>

            <div className="HP">
              <p>HP {pokemoes.vida}</p>
            </div>

            <div className="attack">
              <p>attack {pokemoes.ataque}</p>
            </div>

            <div className="tipo">
              <p>{pokemoes.tipo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poke;