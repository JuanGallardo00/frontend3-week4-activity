import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
                <span className="genre-badge">{product.genre}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="platform">{product.platform}</p>
                <div className="card-footer">
                    <p className="product-price">${product.price}</p>
                    <p className="rating">⭐ {product.rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
