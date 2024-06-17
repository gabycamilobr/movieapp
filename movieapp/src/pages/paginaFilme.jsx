import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Rating } from "@material-tailwind/react";
 

function PaginaFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])

    const apiKey='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'

    useEffect( () => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))
    },[])

    return(
        <>
        <h1> Detalhes do Filme</h1>
        <img src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`}/>
         <p>{filme.title}</p>
         <p>{filme.overview}</p>
         <p>{filme.vote_average}</p>
         <Rating value={4}/>
        </>
    )
}
export default PaginaFilmes