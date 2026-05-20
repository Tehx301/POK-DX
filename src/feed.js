import { useParams } from "react-router-dom";
import { useFetchPokeapi } from "../hooks/useFetchPokeapi"; 

function Feed() {
const { id } = useParams();
 const {pokemons, loading, error} = useFetchPokeapi("chespin"); 
const dados = {
   

};

const post = dados[id];

return (
<div>
<h2>{post.titulo}</h2>
<p>{post.conteudo}</p>
</div>
);
}

export default Feed;