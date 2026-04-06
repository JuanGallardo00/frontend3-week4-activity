import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { games } from '../data/games';

const ProductDetails = () => {
    // 1. Atrapamos el ID de la URL
    const { id } = useParams();

    // 2. Estado global del carrito
    const { addToCart } = useContext(CartContext);

    // 3. Buscamos el juego en los datos locales
    const game = games.find((g) => g.id === parseInt(id));

    // 4. Renderizado condicional si no existe
    if (!game) {
        return <h2 className="state-message error-text">Juego no encontrado ❌</h2>;
    }

    return (
        <div className="container details-container">
            <Link to="/" className="back-link">⬅ Volver al catálogo</Link>

            <div className="product-layout">
                <img src={game.image} alt={game.title} className="details-image" />

                <div className="details-info">
                    <h2>{game.title}</h2>

                    <div className="details-badges">
                        <span className="genre-badge">{game.genre}</span>
                        <span className="year-badge">{game.releaseYear}</span>
                    </div>

                    <p className="platform-detail">🎮 {game.platform}</p>
                    <p className="rating-detail">⭐ Puntuación: <strong>{game.rating} / 10</strong></p>
                    <p className="description">{game.description}</p>

                    <h3 className="price">${game.price}</h3>

                    <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(game)}
                    >
                        Añadir al Carrito 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
