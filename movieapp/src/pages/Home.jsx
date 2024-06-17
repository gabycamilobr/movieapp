import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="buscar" placeholder="Digite aqui sua busca"/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    
                data.map(filme => (
                    <div className='card bg-primary-cards w-25' key={filme.title}>
                    <h1 className='text-primary-gabys font-semibold'>{filme.title}</h1>
                    <img className='mb-2 flex items-center' src={filme.image} alt={filme.title} />

                    <div className='texto'>
                        {filme.text.map(texto => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                    
                    <div className='tag'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='text-purple-600 p-1 m-1 '> {tag} </span>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        </main>
     );
}

export default Home ;

//<div className='card'>
   // <h1>Titulo do Filme</h1>;
   // <img src="" alt="" />;
   // <div className='tag'>
    //    <span>
            
    //    </span>
  //  </div>

//</div>