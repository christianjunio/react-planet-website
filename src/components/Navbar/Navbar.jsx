import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <header>
            <div className="navbar">
            <h1>Planets.</h1>
            <nav>
                <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planets">Planets</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact-us">Contact-us</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Navbar