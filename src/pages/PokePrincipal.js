import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokePrincipal.css';
import fundocard from "../assets/Pokemon.jpg";
import useFetchPokeapi from "../hooks/useFetchPokeApi";

function PokePrincipal() {
    const {pokemons, loading, error} = useFetchPokeapi("Marshadow"); 


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

            <div className="pokemon-containerPrincipal">

                <div className="pokemon-cardPrincipal">

                    <div className="nomepokemonPrincipal">
                        <h3>{pokemons.name}</h3>
                    </div>

                    <div className="imagenPrincipal">
                        <img src={pokemons.sprites.front_default} alt={pokemons.name} />
                    </div>
                    <div className="imagen2Principal">
                        <img src={fundocard} alt="CenárioPrincipal" />
                    </div>

                    <div className="HPPrincipal">
                        <h3>{pokemons.stats[0].stat.name + ' ' + pokemons.stats[0].base_stat}</h3>
                    </div>

                    <div className="attackPrincipal">
                        <h3>{pokemons.stats[1].stat.name + ' ' + pokemons.stats[0].base_stat}</h3>
                    </div>

                    <div className="tipoPrincipal">
                        <h3>{pokemons.types[0].type.name}</h3>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default PokePrincipal;