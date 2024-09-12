// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BurguerButton from '../components/BurguerButton';
import { Link } from 'react-router-dom';
import '../assets/style/Header.css'

const Header = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <header className={`header ${showHeader ? '' : 'hidden'}`}>
            <div className="logo">
                <Link to="/">
                    <img
                        src="src\assets\img\logo_DFEEC.png"
                        alt="Logo"
                        width="120"
                        height="100"
                    />
                </Link>
            </div>
            <nav className="nav">
                <Link to="/Nosotros">Nosotros</Link>
                <Link to="/Categorias">Categorias</Link>
                <Link to="/Contacto">Contacto</Link>
            </nav>
            <div className="user-action">
                <FontAwesomeIcon icon={faUser} />
                <a href="#">Iniciar / Registrar</a>
            </div>
            <div className="burguer">
                <BurguerButton />
            </div>
        </header>
    );
};

export default Header;
