import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-primary-gabys text-white p-4">
            <span>Olá, visitante!</span>
            <h1>CineGabys
            </h1>
            <Navbar/>
        </header>
     );
}

export default Header ;