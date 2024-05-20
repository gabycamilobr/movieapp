import data from '../../artigos.json'

function Home() {
    console.log(data)
    return ( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca"/>
            <div className='lista-filmes'>
                {
                data.map(filme => (
                    <h1>{filme.title}</h1>
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