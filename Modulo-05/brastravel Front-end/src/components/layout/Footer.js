import {} from './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="footer fixed-bottom border-top bg-warning mt-5">
            <div className="container text-center text-white">
                &copy; 2021 - BrasTravel - <Link to='/Contatos' className="text-white">Contatos</Link>
            </div>
        </footer>
    )
}

export default Footer