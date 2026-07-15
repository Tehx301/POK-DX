import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poke.css';
import useFetchPokeapi from "../hooks/useFetchPokeApi";
import { useParams, Link } from "react-router-dom";
import bo from "../assets/bol.png";
import imgmetal from "../assets/metal.jpg";
import imgSombrio from "../assets/Pokemon.jpg";
import imgnatureza from "../assets/planta.jpg";


function Poke() {
  const { id } = useParams();/* busca o id da uma api */
  const { pokemoes, loading, error, } = useFetchPokeapi(id);
  //  const [imgfundo, setImgfundo] = useState(bo) ;



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

  let fundo = bo;
  if (pokemoes.tipo == 'corpo') {
    fundo = imgSombrio
  }
  else if (pokemoes.tipo == 'natureza') {
    fundo = imgnatureza
  }
  else if (pokemoes.tipo == 'terra') {
    fundo = imgmetal
  }



  return (


    <div className="App">
      <h1>poke card</h1>
      <div className={`pokemon-container tipo-${pokemoes.tipo}`}>

        <div className="imagen2">
          <img src={fundo} alt="fundo" />
        </div>

        <div className="pokemon-card">
          <div className="imagen">
            <img src={pokemoes.imagen} />


            <div className="nomepokemon">
              <p>{pokemoes.nome}</p>
            </div>



            <div className="HP">
              <p>HP {pokemoes.vida}</p>
            </div>



            <div className="attack">
              <p> attack {pokemoes.ataque}</p>
            </div>



            <div className="tipo">
              <p>{pokemoes.tipo}</p>
            </div>
          </div>
        </div>
        <Link to="/">
        <button className="voltaae"> inicio
          </button></Link>
        <Link to={`/Poke/${pokemoes.evol1}`}className="bo" >
          <button className="bo"><img src={bo} /></button>
        </Link>
        <Link to={`/Poke/${pokemoes.evol2}`} className="bo2">
          <button className="bo2"><img src={bo} /></button>
        </Link>
        <Link to={`/Poke/${pokemoes.evol3}`} className="bo3">
          <button className="bo3"><img src={bo} /></button>
        </Link>
      </div>
    </div>
  );
}

export default Poke;