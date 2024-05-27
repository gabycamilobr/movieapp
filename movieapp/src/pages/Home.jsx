import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="buscar" placeholder="Digite aqui sua busca"/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    
                data.map(filme => (
                    <div className='card bg-slate-400' key={filme.title}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} />

                    <div className='texto'>
                        {filme.text.map(texto => (
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                    
                    <div className='tag'>
                        {filme.tags.map(tag => (
                            <span key={tag} className='text-purple-600'> {tag} </span>
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