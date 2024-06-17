import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3'>
                <li className='hover:underline'><Link to ="/">Notícias</Link></li>
                <li className='hover:underline'><Link to ="filmes"> Filmes</Link></li>
                <li className='hover:underline'><Link to ="sobre">Sobre</Link></li>
                <li className='hover:underline'><Link to ="contato">Contato</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;