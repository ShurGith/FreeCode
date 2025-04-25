import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo-link"><h1>ReactCurso</h1></NavLink>
            <ul className="menu">
                <li><NavLink className="menu-link" to="/">Inicio</NavLink></li>
                <li><NavLink to="/productos" className="menu-link">Productos</NavLink></li>
                <li><NavLink to="/nosotros" className="menu-link">Nosotros</NavLink></li>
                <li><NavLink to="/contacto" className="menu-link">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar