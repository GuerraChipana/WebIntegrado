// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BurguerButton from './BurguerButton';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <i><div className="logo">
                <Link to="/">
                    <img
                        src="src/assets/img/logo_DFEEC.png"
                        alt="Logo"
                        width="80"
                        height="80"
                    />
                </Link>
            </div></i>

            <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/Nosotros">Nosotros</Link>
                <Link to="/Categorias">Categorias</Link>
                <Link to="#">Proveedores</Link>
            </nav>
            <div className="user-action">
                <FontAwesomeIcon icon={faUser} />
                <a href="#">Iniciar / Registrar</a>
            </div>
            <div className='burguer'>
                <BurguerButton />
            </div>
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(15, 18, 37);
    
    .logo {
        flex-shrink: 0;
    }

    .logo a img {
        display: block;
    }

    .nav {
        display: flex;
        gap: 1rem; /* Espacio entre enlaces */
    }

    .nav a {
        color: white;
        text-decoration: none;
        font-weight: 500;
    }

    .nav a:hover {
        text-decoration: underline; /* Subrayado al pasar el ratón */
    }

    .user-action {
        display: flex;
        align-items: center;
        color: white;
    }

    .user-action a {
        color: white;
        text-decoration: none;
        margin-left: 10px; /* Espacio entre icono y texto */
        font-weight: 500;
    }

    .user-action a:hover {
        text-decoration: underline; /* Subrayado al pasar el ratón */
    }

    .burguer {
        display: none;
    }

    @media (max-width: 768px) {
        .nav {
            display: none;
        }

        .burguer {
            display: block;
        }
    }
`;
