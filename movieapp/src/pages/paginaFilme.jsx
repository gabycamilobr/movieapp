import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
 

function PaginaFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])
    const navigate = useNavigate();
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

        <main className="my-3 p-12">
        <div className="mb-12 ">
            <img src="../../img/setinha.png" onClick={() => navigate(-1)} className="w-8 " alt="" />
          </div>
            <h1 className="text-3xl font-bold text-red-800 mb-8">Detalhes do Filme</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img className="w-full h-96 object-cover" src={`https://image.tmdb.org/t/p/w1280/${filme.backdrop_path}`} alt={filme.title} />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6 text-red-800">{filme.title}</h2>
                        <h3 className=" text-lg font-semibold underline-offset-4 underline decoration-primary-gabys">Avaliação:</h3>
                            <div className="flex items-center">
                                <svg className="w-5 h-7 text-primary-gabys" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.89 5.841a1 1 0 00.95.69h6.173c.969 0 1.371 1.24.588 1.81l-4.993 3.62a1 1 0 00-.363 1.118l1.89 5.84c.3.922-.755 1.688-1.54 1.118l-4.992-3.62a1 1 0 00-1.176 0l-4.992 3.62c-.784.57-1.838-.196-1.54-1.118l1.89-5.84a1 1 0 00-.363-1.118l-4.993-3.62c-.783-.57-.38-1.81.588-1.81h6.173a1 1 0 00.95-.69l1.89-5.841z" />
                                </svg>
                                <span className="ml-2">{filme.vote_average}</span>
                            </div>
                            <h3 className="text-lg font-semibold underline-offset-4 underline  decoration-primary-gabys mt-6">Data de Lançamento:</h3>
                            <div className="flex items-center justify-between mt-1">
                                        <span>{new Date(filme.release_date).getFullYear()}</span>
                            </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold underline-offset-4 underline  decoration-primary-gabys">Sinopse</h3>
                            <div className="mt-1 font-bold mb-7">
                            Não recomendado para menores de {filme.adult ? "18" : "12"} anos
                            </div>
                            <p className="text-lg">{filme.overview}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default PaginaFilmes