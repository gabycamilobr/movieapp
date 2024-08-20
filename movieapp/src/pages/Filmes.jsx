import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [resultados, setResultados] = useState([]);

    const apiKey = '7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w342/';

    useEffect(() => {
        fetch(`${urlBase}popular?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results);
                setResultados(data.results); 
            })
            .catch(error => console.log(error));
    }, []);

    const categorias = {
        "Ação/Aventura": [28, 12],
        "Comédia": [35],
        "Terror": [27],
    };

    const getCategoria = (genreIds) => {
        for (const categoria in categorias) {
            if (categorias[categoria].some(id => genreIds.includes(id))) {
                return categoria;
            }
        }
        return "Outros";
    };

    const filmesPorCategoria = resultados.reduce((acc, filme) => {
        const categoria = getCategoria(filme.genre_ids);
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(filme);
        return acc;
    }, {});

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        const resultadosFiltrados = filmes.filter((filme) =>
            filme.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResultados(resultadosFiltrados);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="ml-10 mt-7">
                <label htmlFor="buscar" className="block text-lg font-medium mb-2">Procurando filme?</label>
                <input 
                    onChange={handleInputChange}
                    type="text"
                    name="busca"
                    id="buscar"
                    value={searchInput}
                    placeholder="Clique para digitar..."
                    className="w-96 px-4 py-2 rounded-full border mb-5 border-gray-300"
                />
            </div>     
            <main className="container my-8 p-10">
                <h1 className="text-3xl font-bold text-red-800 mb-8">Filmes Populares</h1>
                {resultados.length === 0 ? (
                    <p className="text-center text-primary-gabys">Infelizmente seu filme não está no nosso catálogo :(</p>
                ) : (
                    Object.keys(filmesPorCategoria).map(categoria => (
                        <div key={categoria} className="mb-12">
                            <h2 className="text-2xl font-bold mb-8">{categoria}</h2>
                            <div className="grid grid-cols-4 gap-10">
                                {filmesPorCategoria[categoria].map(filme => (
                                    <div className="card-filme" key={filme.id}>
                                        <img className="rounded-lg" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                                        <h3 className="text-lg font-semibold mt-2">{filme.title}</h3>
                                        <Link to={`/filmes/${filme.id}`} className="block bg-primary-gabys text-white text-center py-2 rounded mt-4 mb-7">Saber mais</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </main>
        </div>
    );
}

export default Filmes;
