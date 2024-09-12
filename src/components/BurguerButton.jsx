// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function BurguerButton() {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <Burguer>
                <div
                    className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
                    onClick={() => setClicked(!clicked)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Burguer>
            <Menu className={clicked ? 'open' : ''}>
                <Link to="/">Inicio</Link>
                <Link to="/Nosotros">Nosotros</Link>
                <Link to="/Categorias">Categorias</Link>
                <Link to="/Contacto">Contacto</Link>
            </Menu>
        </div>
    );
}

export default BurguerButton;

const Burguer = styled.div`
    .icon {
        width: 35px;
        height: 30px;
        position: fixed; /* O absolute si es necesario */
        top: 50px; /* Ajusta según sea necesario */
        right: 20px; /* Ajusta según sea necesario */
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Asegúrate de que el z-index sea alto */
    }

    .icon span {
        background-color: #ffffff;
        border-radius: 10px;
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        transition: all 0.3s ease;
    }

    .icon span:nth-child(1) {
        top: 0px;
    }

    .icon span:nth-child(2) {
        top: 12px;
    }

    .icon span:nth-child(3) {
        top: 24px;
    }

    .icon.open span:nth-child(1) {
        transform: rotate(45deg);
        top: 12px;
    }

    .icon.open span:nth-child(2) {
        opacity: 0;
    }

    .icon.open span:nth-child(3) {
        transform: rotate(-45deg);
        top: 12px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const Menu = styled.div`
    display: none;
    background-color: #3250ff;
    position: fixed; /* O absolute si es necesario */
    top: 112px;
    right: 0;
    width: 208px;
    height: 0; /* Inicialmente colapsado */
    overflow: hidden;
    text-align: center; /* Centra horizontalmente el texto */
    border-radius: 0 0 10px 110px; /* Forma de media esfera */
    display: flex; /* Usar flexbox para centrar verticalmente */
    flex-direction: column; /* Colocar los elementos en una columna */
    justify-content: center; /* Centrar verticalmente */
    transition: height 0.7s ease, background-color 0.7s ease;
    z-index: 999; /* Asegúrate de que el z-index sea alto pero menor que el del botón */

    &.open {
        display: flex; /* Mostrar como flexbox cuando está abierto */
        height: 250px; /* Altura expandida */
    }

    a {
        color: #fff;
        padding: 10px;
        margin: 0; /* Ajustar margen para centrar el texto */
        text-decoration: none;
        font-size: 17px;
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.2); /* Color más claro al pasar el mouse */
    }

    @media (min-width: 768px) {
        display: none;
    }
`;
