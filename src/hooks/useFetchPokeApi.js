import { useState, useEffect } from 'react';
import axios from 'axios';

// Cria um Custom Hook que recebe o nome ou ID do pokemon como argumento
function useFetchPokeapi(pokemon) {
  // Esse log roda toda vez que o componente que usa o hook renderiza ou atualiza
  console.log('iniciando construção da pagina')

  // Estados para armazenar os dados do pokemon, o status de carregamento e possíveis erros
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect monitora mudanças e executa a requisição HTTP de forma assíncrona
  useEffect(() => {

    // Função assíncrona interna para lidar com o Axios e o fluxo de dados
    const getData = async () => {
      try {
        // busca um pokemon na api definida
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${endpoint}${pokemon}`,
          {
            // Headers para desativar o cache do navegador e garantir dados sempre novos
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });

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
    getData();

   
  }, [pokemon]);// Roda sempre que o nome do pokémon mudar

  // Retorna os estados atuais para o componente que invocar este hook
  return { pokemons, loading, error }
}

export default useFetchPokeapi;


