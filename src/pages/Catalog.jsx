import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { games } from '../data/games';

const Catalog = () => {
    const [search, setSearch] = useState('');

    // Filtramos los juegos según el texto de búsqueda
    const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(search.toLowerCase()) ||
        game.genre.toLowerCase().includes(search.toLowerCase()) ||
        game.platform.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h2 className="title">Catálogo de Videojuegos</h2>

            <input
                type="text"
                className="search-input"
                placeholder="Buscar por nombre, género o plataforma..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.length === 0 ? (
                <p className="state-message">No se encontraron juegos 🔍</p>
            ) : (
                <div className="products-grid">
                    {filtered.map((game) => (
                        <ProductCard key={game.id} product={game} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Catalog;
