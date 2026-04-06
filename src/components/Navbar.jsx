import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">🎮 GameStore</Link>

            <div className="nav-links">
                <Link to="/" className="nav-link">Catálogo</Link>
                <Link to="/cart" className="nav-link">Mi Carrito</Link>
            </div>
        </nav>
    );
};

export default Navbar;
