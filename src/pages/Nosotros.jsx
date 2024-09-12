import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/style/Nosotros.css'

const AboutUs = () => {
    return (
        <main className="about-us">
            <Container className="my-5">
                <h1 className="text-center mb-4">Sobre Nosotros</h1>

                <Row className="mb-5">
                    <Col md={6}>
                        <Card className="p-4 shadow-sm border-light">
                            <Card.Title className="d-flex align-items-center">
                                <i className="fas fa-bullseye fs-3 me-3"></i>
                                Misión
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    En Ferretería Pepito, nuestra misión es proporcionar herramientas y materiales de alta calidad
                                    que ayuden a nuestros clientes a realizar sus proyectos de manera efectiva y segura.
                                    Nos comprometemos a ofrecer un servicio al cliente excepcional y asesoramiento experto.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-4 shadow-sm border-light">
                            <Card.Title className="d-flex align-items-center">
                                <i className="fas fa-eye fs-3 me-3"></i>
                                Visión
                            </Card.Title>
                            <Card.Body>
                                <p>
                                    Buscamos ser la ferretería líder en nuestra región, reconocida por la calidad de nuestros productos
                                    y la excelencia en el servicio. Nuestra visión es expandir nuestras categorías de productos y
                                    mantenernos a la vanguardia de las necesidades del mercado.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <section className="text-center">

                    <h2 className="mb-4">
                        <i className="fas fa-location fs-3 me-2"></i>
                        Ubicación
                    </h2>
                    <Row className="mb-3">
                        <Col md={12} className="d-flex align-items-center justify-content-center">
                            <p>
                                Psj. Los Angeles 121 urb. San Carlos y anexos, Ica, Perú                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <iframe
                                title="Ubicación de la Ferretería"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.120934954178!2d-75.7294068!3d-14.0610742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3888ffb63d1%3A0x7da9467d978bdfde!2sFerreter%C3%ADa%20DIFELEC!5e0!3m2!1ses!2sus!4v1632543518784!5m2!1ses!2sus"
                                width="750"
                                height="400"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>

                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default AboutUs;
