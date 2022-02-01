import { Link } from 'react-router-dom'
import { } from './NavBar.css'

function NavBar() {
    return (



        <nav className="navbar navbar-expand-lg text-white p-0 m-0">
            <div className="container-fluid colorBlue">
                <Link className="navbar-brand mx-2 my-auto" to='/'> <img src="/img/local-na-rede-internet.png"
                    alt="Home" /></Link>
                <button className="btn btn-outline-warning text-white text-white" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="true"
                    aria-label="Toggle navigation">
                    Menu
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2 my-1 dropdown">
                            <button className="btn btn-sm btn-outline-warning dropdown-toggle text-white" id="dropdownId"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                href="#">Destinos</button>
                            <div className="dropdown-menu bg-success mx-auto p-0" aria-labelledby="dropdownId">
                                <Link className="w-100 btn btn-sm btn-outline-warning text-white" to='/Nacionais'>Nacionais</Link>
                                <Link className="w-100 btn btn-sm btn-outline-warning text-white" to='/Internacionais'>Internacionais</Link>
                            </div>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-sm btn-outline-warning text-white" to='/Promocoes'>Promoções</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-sm btn-outline-warning text-white" to='/Viagem'>Viagem</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-sm btn-outline-warning text-white" to='/Contatos'>Contatos</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn btn-sm btn-outline-warning text-white " to='/Administracao'>Administração</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default NavBar