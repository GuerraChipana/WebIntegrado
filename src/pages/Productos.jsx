import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../style/Productos.css';

function Productos({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchProductos = async (categoriaId = '') => {
        try {
            const productosResponse = await fetch(`http://localhost:3002/api/productos?categoria_id=${categoriaId}`);
            const categoriasResponse = await axios.get('http://localhost:3002/api/categorias');

            if (!productosResponse.ok) {
                throw new Error("Error al obtener los datos del servidor");
            }
            const productosData = await productosResponse.json();
            setProductos(productosData);
            setCategorias(categoriasResponse.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        // Leer el parámetro de la categoría desde la URL
        const queryParams = new URLSearchParams(location.search);
        const categoriaId = queryParams.get('categoria_id');
        setCategory(categoriaId || '');
        fetchProductos(categoriaId || '');
    }, [location.search]);

    const handleAgregarAlCarrito = (producto) => {
        agregarAlCarrito(producto);
        const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
        localStorage.setItem("carrito", JSON.stringify([...carritoActual, producto]));
        navigate('/carrito');
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        navigate(`/productos?categoria_id=${selectedCategory}`); // Redirigir para actualizar la URL
    };

    const filteredProductos = productos.filter(p =>
        (p.nombre.toLowerCase().includes(search.toLowerCase()) ||
            p.descripcion.toLowerCase().includes(search.toLowerCase())) &&
        (!category || p.categoria_id === parseInt(category))
    );

    return (
        <div className="productos-container">
            <h1>Listado de Productos</h1>
            <hr />

            {/* Barra de búsqueda y filtro */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar por nombre o descripción..."
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="category-select"
                >
                    <option value="">Todas las categorías</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="productos-grid">
                {error && <p className="error-message">Error: {error}</p>}
                {filteredProductos.length === 0 ? (
                    <p>No hay productos disponibles</p>
                ) : (
                    filteredProductos.map(p => (
                        <div className="card" key={p.id}>
                            <img src={p.imagen || 'default-image.jpg'} alt={p.nombre} className="card-image" />
                            <div className="card-content">
                                <h3>{p.nombre}</h3>
                                <p>{p.descripcion}</p>
                                <p className="card-price">Precio: S/{p.precio}</p>
                                <p className="card-stock">Stock: {p.stock}</p>
                                <button
                                    className="add-to-cart"
                                    onClick={() => handleAgregarAlCarrito(p)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

// Validación de props con PropTypes
Productos.propTypes = {
    agregarAlCarrito: PropTypes.func.isRequired,
};

export default Productos;
