/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/BD_Bienvenida.css'; // Asegúrate de crear este archivo CSS para los estilos

// Importa la imagen de manera correcta
import logo from '../img/logo_DFEEC.png';

function BD_Bienvenida() {
    return (
        <div className="welcome-container">
            <div className="welcome-header">
                <div className="logo-container">
                    <img src={logo} alt="Logo DIFELEC" className="logo" />
                </div>
                <h1>Bienvenida a la Parte Administrativa</h1>
                <p>En esta sección podrás gestionar todos los aspectos importantes de la empresa.</p>
            </div>
            <div className="company-info">
                <h2>Datos de la Empresa</h2>
                <p><strong>Nombre:</strong> Ferretería DIFELEC</p>
                <p><strong>Ubicación:</strong> Psj. Los Angeles 121 urb. San Carlos y anexos, Ica, Perú</p>
            </div>
        </div>
    );
}

export default BD_Bienvenida;
