import { useState, useEffect } from 'react';
import axios from 'axios';

function usePokemon() {
  const [pokemons, serPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await
          axios.get('https://pokeapi.co/api/v2/pokemon/chespin');
        serPokemon(res.data);
        console.log('success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Erro ao caregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData()[pokemons];

  }, []);
  return { pokemons, loading, error };
}

export default usePokemon;