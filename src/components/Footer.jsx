// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>

                <div className="address">
                    <p> Psj. Los Angeles 121 urb. San Carlos y anexos, Ica, Perú</p>
                </div>

                <div className="contact-info">
                    <div>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:clinica@gmail.com">FerreteriaDFEEC@gmail.com</a>
                        <span className="separator">|</span>
                        <i className="fas fa-phone"></i>956342842
                    </div>
                </div>

                <div className="footer-links">
                    <p>Política de privacidad <span className="separator">| Codigo de ética</span></p>
                </div>

                <div className="logo-section">
                    <FontAwesomeIcon icon={faCopyright} />
                    <p className="small-text">Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
