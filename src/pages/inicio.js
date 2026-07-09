import React from 'react';
/*↑ Importa o React para poder criar e usar componentes na página*/
import './inicio.css';
/*↑ Importa o arquivo o CSS para poder estylizar a pagina*/
import { Link } from "react-router-dom";
/*↑ Importa a ferramenta de navegação para mudar de página sem recarregar o navegador*/
import fundo from "../assets/fundo.jpeg";
/*↑ Importa a imagem do fundo*/
import treinador from "../assets/ummm.png";
/*↑ Importa a imagem do treinador*/
import botao from "../assets/bol.png";
/*↑ Importa a imagem do botão*/

/*↓ Define a função do componente chamada Trainer*/
function Trainer() {
    return (
        /*Div principal que envelopa toda a tela*/
        <div className="conteiner">
            {/* Bloco responsável por exibir a imagem de fundo do app*/}
            <div className="fundo">
                <img src={fundo} alt="Cenário" />
            </div>

            {/* Bloco responsável por exibir a imagem do treinador */}
            <div className="treinador">
                <img src={treinador} alt="Treinador" />
            </div>

            {/* Bloco principal que agrupa as informações de status e os botões de navegação */}
            <div className="irParaotrapagia">

                {/* Cartão ou painel que exibe os dados do treinador */}
                <div className="status">

                    {/* Exibe o nome completo do jogador */}
                    <div className="nome">
                        <h3>Julia Isabela de Castro Silva</h3>
                    </div>

                    {/* Exibe o nome do treinadora */}
                    <div className="nikname">
                        <h3>nick: jason</h3>
                    </div>

                    {/* Exibe a idade da treinadora */}
                    <div className="idade">
                        <h3>quantos anos</h3> <h3>tem: 18</h3>
                    </div>

                    {/*Exibe a quantidade de pokébolas que tem*/}
                    <div className="pokebolas">
                        <h3>você tem 4 pokebolas</h3>
                    </div>

                    {/*links que usam a imagem com nome "botao" que é a imagen de uma pokebola, para navegar pelos pokemons*/}
                </div>
                <Link to="/Poke/chespin" className="botao"> <img src={botao} /></Link>
                <Link to="/Poke/caterpie" className="botao"> <img src={botao} /></Link>
                <Link to="/Poke/Marshadow" className="botao"> <img src={botao} /></Link>
                <Link to="/Poke/skarmory" className="botao"> <img src={botao} /></Link>
                
            </div>
        </div>
    );

}
/*Exporta o componente Trainer para que ele possa ser importado e usado no arquivo de rotas (App.js ou Main.js)*/
export default Trainer;