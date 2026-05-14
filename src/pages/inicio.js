import React from 'react';
import './inicio.css';
import { Link } from "react-router-dom";
import fundo from "../assets/fundo.jpeg"
import treinador from "../assets/ummm.png"
import botao from "../assets/bol.png"



function Trainer() {

    return (
        <div className="conteiner">
            <div className="fundo">
                <img src={fundo} alt="Cenário" />
            </div>

            <div className="treinador">
                <img src={treinador} alt="Treinador" />
            </div>


            <div className="irParaotrapagia">
                <div className="status">
                    <div className="nome">
                        <h3>Julia Isabela de Castro Silva</h3>
                    </div>
                    <div className="nikname">
                        <h3>nick: jason</h3>
                    </div>
                    <div className="idade">
                        <h3>quantos anos</h3> <h3>tem: 18</h3>
                    </div>
                    <div className="pokebolas">
                        <h3>você tem 6 pokebolas</h3>
                    </div>
                </div>
                <Link to="/Poke" className="botao"> <img src={botao} /></Link>
                <Link to="/Pokep2" className="botao"> <img src={botao} /></Link>
                <Link to="/" className="botao"> <img src={botao} /></Link>
                <Link to="/" className="botao"> <img src={botao} /></Link>
                <Link to="/" className="botao"> <img src={botao} /></Link>
                <Link to="/" className="botao"> <img src={botao} /></Link>

            </div>
        </div>
    );

}
export default Trainer;