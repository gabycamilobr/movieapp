import data from '../../artigos.json';

function Home() {
    console.log(data);
    return (
        
        <main className="container mx-auto my-4">
        <div className="mb-4">
            <label htmlFor="buscar" className="block text-lg font-medium mb-2">Procurando filme?</label>
            <input
                type="text"
                name="busca"
                id="buscar"
                placeholder="Clique para digitar..."
                className="w-96 px-4 py-2 rounded-full border mb-5 border-gray-300 "
            />
        </div>
        <h1 className='text-primary-gabys font-bold text-xl mb-8'>Notícias Rápidas</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {data.map(filme => (
                <div className='card bg-primary-cards p-4 rounded-lg flex flex-col items-center' key={filme.title}>
                    <h1 className='text-primary-gabys font-semibold text-lg mb-2'>{filme.title}</h1>
                    <img className='mb-2' src={filme.image} alt={filme.title} />

                    <div className='texto '>
                        {filme.text.map(texto => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                
                </div>
            ))}
        </div>
    </main>
    );
}

export default Home;
