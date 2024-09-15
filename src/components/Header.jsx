import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BurguerButton from './BurguerButton';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <div className="logo">
                    <Link to="/">
                        <img
                            src="src/assets/img/logo_DFEEC.png"
                            alt="Logo"
                            width="80"
                            height="80"
                        />
                    </Link>
                </div>

                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                    <Link to="/Categorias">Categorías</Link>
                    <Link to="#">Proveedores</Link>
                </nav>

                <div className="user-action">
                    <FontAwesomeIcon icon={faUser} />
                    <Link to="/Login">Iniciar / Registrar</Link>
                </div>

                <div className="burguer">
                    <BurguerButton />
                </div>
            </HeaderContainer>

            <MainContent />
        </>
    );
};

export default Header;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: rgb(15, 18, 37);
    position: fixed; /* Fija el header en la parte superior */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Asegura que el header esté por encima del contenido */
    
    .logo {
        flex-shrink: 0;
    }

    .logo a img {
        display: block;
    }

    .nav {
        display: flex;
        gap: 1rem;
    }

    .nav a {
        color: white;
        text-decoration: none;
        font-weight: 500;
    }

    .nav a:hover {
        text-decoration: underline;
    }

    .user-action {
        display: flex;
        align-items: center;
        color: white;
    }

    .user-action a {
        color: white;
        text-decoration: none;
        margin-left: 10px;
        font-weight: 500;
    }

    .user-action a:hover {
        text-decoration: underline;
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

const MainContent = styled.main`
    padding-top: 100px; /* Asegúrate de agregar suficiente espacio para evitar que el contenido se superponga con el header */
`;
