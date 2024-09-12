import { Link } from 'react-router-dom';
import '../assets/style/Categorias.css';

const Categorias = () => {
    return (
        <main>
            <section id="Categorias" className="categories">
                <h2>Nuestras Categorías</h2>
                <div className="container">
                    <Link to="#" className="category">
                        <img src="src/assets/img/Herramientas.png" alt="Herramientas" />
                        <i className="fas fa-wrench icon"></i>
                        <div className="text-content">
                            <h4>Herramientas</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src/assets/img/Materiales_electricos.jpg" alt="Electricidad" />
                        <i className="fas fa-bolt icon"></i>
                        <div className="text-content">
                            <h4>Electricidad</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src/assets/img/Fontaneria.jpg" alt="Fontanería" />
                        <i className="fas fa-faucet icon"></i>
                        <div className="text-content">
                            <h4>Fontanería</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src/assets/img/cerrajeria.jpg" alt="Cerrajería" />
                        <i className="fas fa-key icon"></i>
                        <div className="text-content">
                            <h4>Cerrajería</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src\assets\img\Pintura.png" alt="Pinturas" />
                        <i className="fas fa-paint-roller icon"></i>
                        <div className="text-content">
                            <h4>Pinturas</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src\assets\img\jardineria.jpg" alt="Jardinería" />
                        <i className="fas fa-seedling icon"></i>
                        <div className="text-content">
                            <h4>Jardinería</h4>
                        </div>
                    </Link>
                    <Link to="#" className="category">
                        <img src="src/assets/img/construccion.jpg" alt="Construcción" />
                        <i className="fas fa-hammer icon"></i>
                        <div className="text-content">
                            <h4>Construcción</h4>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Categorias;
