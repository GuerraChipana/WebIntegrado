// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/style/Categorias_home.css';
import '../assets/style/Home.css';
import { Link } from 'react-router-dom';
import SKDImg from "../components/SKDImg";

const Inicio = () => {
    return (
        <main>
            <section className="hero">
                <SKDImg />
            </section>
            <section id="Conocenos" className="about">
                <div className='about-container'>
                    <h2>Conócenos</h2>
                    <p>
                        En Ferretería Pepito nos dedicamos a ofrecer las mejores herramientas y materiales para tus proyectos.
                        Contamos con un amplio catálogo de productos de alta calidad y un equipo de expertos listos para asesorarte.
                    </p>
                </div>

                <div className="about-content">
                    <div className="info-cards">
                        <div className="info-card">
                            <i className="fas fa-tools"></i>
                            <p>Herramientas <br />de Primera Calidad</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-paint-roller"></i>
                            <p>Materiales <br />de Construcción</p>
                        </div>
                        <div className="info-card">
                            <i className="fas fa-truck"></i>
                            <p>Entrega <br />Rápida y Segura</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="src\assets\img\Vendedor.jpeg" alt="img_vendedor" width="400" />
                    </div>
                </div>
            </section>

            <section id="Productos" className="specialties">
                <h2>Nuestros Productos</h2>
                <div className="container">
                    <div className="specialty">
                        <img src="src\assets\img\Herramientas.png" alt="Herramientas" />
                        <i className="fas fa-hammer icon"></i>
                        <div className="text-content">
                            <h4>Herramientas</h4>
                            <p>Desde herramientas manuales hasta eléctricas</p>
                        </div>
                    </div>
                    <div className="specialty">
                        <img src="src\assets\img\Materiales.jpg" alt="Materiales" />
                        <i className="fas fa-cogs icon"></i>
                        <div className="text-content">
                            <h4>Materiales</h4>
                            <p>Todo lo necesario para tus proyectos de construcción</p>
                        </div>
                    </div>
                    <div className="specialty">
                        <img src="src\assets\img\Pintura.jpg" alt="Pinturas" />
                        <i className="fas fa-paint-brush icon"></i>
                        <div className="text-content">
                            <h4>Pinturas</h4>
                            <p>Colores y acabados para todos los gustos</p>
                        </div>
                    </div>
                    <div className="specialty">
                        <img src="src\assets\img\Materiales_electricos.jpg" alt="Electricidad" />
                        <i className="fas fa-bolt icon"></i>
                        <div className="text-content">
                            <h4>Materiales Eléctricos</h4>
                            <p>Todo lo necesario para tus instalaciones eléctricas</p>
                        </div>
                    </div>
                </div>
                <nav className="more-specialties">
                    <Link to="/Categorias">
                        <p>Ver más categorias <i className="fas fa-arrow-right"></i></p>
                    </Link>
                </nav>
            </section>
        </main>
    );
};

export default Inicio;
