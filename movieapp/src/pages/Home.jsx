import { useState } from 'react';
import data from '../../artigos.json';

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(filme => 
        filme.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="container my-4">
            <div className="ml-10 mb-4">
                <label htmlFor="buscar" className="block text-lg font-medium mb-2">Procurando notícia?</label>
                <input
                    type="text"
                    name="busca"
                    id="buscar"
                    placeholder="Clique para digitar..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="w-96 px-4 py-2 rounded-full border mb-5 border-gray-300"
                />
            </div>
            <h1 className='ml-10 text-primary-gabys font-bold text-xl mb-8'>Notícias Rápidas</h1>
            <div className='p-10 grid md:grid-cols-3 gap-20'>
                {filteredData.length === 0 ? (
                    <p className='text-center text-primary-gabys col-span-full'>Infelizmente sua notícia não está no nosso catálogo :(</p>
                ) : (
                    filteredData.map(filme => (
                        <div className='card bg-primary-cards p-7 rounded-lg flex flex-col items-center' key={filme.title}>
                            <h1 className='text-primary-gabys font-semibold text-lg mb-2'>{filme.title}</h1>
                            <img className='mb-3 w-full' src={filme.image} alt={filme.title} />
                            <div>
                                {filme.text.map((texto, index) => (
                                    <p key={index}>{texto}</p>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}

export default Home;
