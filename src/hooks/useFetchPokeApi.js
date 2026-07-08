import { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemonDB } from '../pages/utils/pokemonDB';
import { openDB } from '../pages/utils/db';

// Cria um Custom Hook que recebe o nome ou ID do pokemon como argumento
function useFetchPokeapi(pokemon) {
  // Esse log roda toda vez que o componente que usa o hook renderiza ou atualiza
  console.log('iniciando construção da pagina')

  // Estados para armazenar os dados do pokemon, o status de carregamento e possíveis erros
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specie, setSpecie] = useState({});
  const [evolution, setEvolution] = useState({});
  const [pokemoes, setPokemoes] = useState({});
  const [Otipo, setOtipo] = useState('');
  const [fumdo, setFumdo] = useState({});


  // useEffect monitora mudanças e executa a requisição HTTP de forma assíncrona
  useEffect(() => {

    // Função assíncrona interna para lidar com o Axios e o fluxo de dados
    const getData = async () => {
      try {
        // busca um pokemon na api definida
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          {}
        );

        // Salva os dados retornados pela API no estado 'pokemons'
        setPokemons(res.data);
        console.log('Success:', res.data);

        // Finaliza o estado de carregamento após o sucesso
        setLoading(false);
      }
      catch (err) {
        // Trata falhas (ex: pokemon não encontrado ou erro de rede)
        console.error("Erro ao carregar API", err);
        setLoading(false) // Desliga o carregamento mesmo se der erro
        setError(true)    // Ativa o estado de erro para tratar na interface
      }
    };

    // Dispara a execução da função de busca de dados
    const checkDB = async () => {
      const cashed = await getPokemonDB(pokemon)
      if (!cashed) {
        await getData()// Roda sempre que o nome do pokémon mudar
      }
      else {
        setPokemoes(cashed)
        setLoading(false)
      }
    };
    checkDB();
  }, [pokemons]);



  //2
  // useEffect monitora mudanças e executa a requisição HTTP de forma assíncrona
  useEffect(() => {

    // Função assíncrona interna para lidar com o Axios e o fluxo de dados
    const getSpecie = async () => {
      try {
        // busca um pokemon na api definida
        const res = await axios.get(pokemons.species.url, {}
        );

        // Salva os dados retornados pela API no estado 'pokemons'
        setSpecie(res.data);
        console.log('Success:', res.data);


      }
      catch (err) {
        // Trata falhas (ex: pokemon não encontrado ou erro de rede)
        console.error("Erro ao carregar API", err);

      }
    };

    // Dispara a execução da função de busca de dados
    getSpecie();
  }, [pokemons]);// Roda sempre que o nome do pokémon mudar


  //3
  // useEffect monitora mudanças e executa a requisição HTTP de forma assíncrona
  useEffect(() => {

    // Função assíncrona interna para lidar com o Axios e o fluxo de dados
    const getEvolution = async () => {
      try {
        // busca um pokemon na api definida
        const res = await axios.get(specie.evolution_chain.url, {}
        );

        // Salva os dados retornados pela API no estado 'pokemons'
        setEvolution(res.data);
        console.log('Success:', res.data);

      }
      catch (err) {
        // Trata falhas (ex: pokemon não encontrado ou erro de rede)
        console.error("Erro ao carregar API", err);

      }
    };

    // Dispara a execução da função de busca de dados
    getEvolution();
  }, [specie]);// Roda sempre que o nome do pokémon mudar

  useEffect(() => {
    const setPoke = async () => {
      try {
      if(!evolution == true){
        return evolution
      }
    else if(!evolution == false){
console.log("nn")
      }
        setPokemoes({
          nome: pokemons.name,
          vida: pokemons.stats[0].base_stat,
          ataque: pokemons.stats[1].base_stat,
          tipo: Otipo,
          imagen: pokemons.sprites.front_default,
          evolucao_chain: [
             evolution.chain.species.name,
            evolution.chain.evolves_to[0].species.name,
            evolution.chain.evolves_to[0].evolves[0].species.name],
      
        });
    } catch (err) {
        console.log(err);
      }
    };
    setPoke();
  }, [evolution, pokemons, Otipo]);


  useEffect(() => {
    const manipularTipo = async () => {
      try {
        if (pokemons.types[0].type.name === 'normal' || pokemons.types[0].type.name === 'fighting') {
          setOtipo("corpo");
        }
        else if (pokemons.types[0].type.name === 'grass' || pokemons.types[0].type.name === 'bug' || pokemons.types[0].type.name === 'poison') {
          setOtipo("natureza");
        }
        else if (pokemons.types[0].type.name === 'ghost' || pokemons.types[0].type.name === 'dark') {
          setOtipo("sombra");
        }
        else if (pokemons.types[0].type.name === 'steel' || pokemons.types[0].type.name === 'rock' || pokemons.types[0].type.name === 'ground') {
          setOtipo("terra");
        }
        else if (pokemons.types[0].type.name === 'water' || pokemons.types[0].type.name === 'ice') {
          setOtipo("agua");
        }
        else if (pokemons.types[0].type.name === 'fire') {
          setOtipo("fogo");
        }
        else if (pokemons.types[0].type.name === 'psychic' || pokemons.types[0].type.name === 'Fairy') {
          setOtipo("mente");
        }
        else if (pokemons.types[0].type.name === 'electric' || pokemons.types[0].type.name === 'dragon' || pokemons.types[0].type.name === 'flying') {
          setOtipo("tempestade");
        }
      } catch (err) {
        console.log(err);
      }
    };
    manipularTipo();
  }, [pokemoes]);






  useEffect(() => {
    const manipularFundo = async () => {
      try {
        setFumdo({
          corpo: "../assets/normal.jpg",
          natureza: "../assets/planta.jpg",
          sombra: "../assets/Pokemon.jpg",
          terra: "../assets/metal.jpg",
          agua: "../assets/agua.jpg",
          fogo: "../assets/fogo.jpg",
          mente: "../assets/psychic.jpg",
          tempestade: "../assets/eletrico.jpg"
        });
      } catch (err) {
        console.log(err);
      }
    };
    manipularFundo();
  }, []);

  return { pokemoes, loading, error, fumdo }
}
export default useFetchPokeapi;


