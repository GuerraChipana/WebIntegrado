/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../style/Dashboard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importa íconos de Font Awesome

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`dashboard-container ${collapsed ? 'sidebar-collapsed' : ''}`}>
      
      {/* Barra lateral */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
          <svg className="bi" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
          <span className="visually-hidden">Icon-only</span>
        </a>

        <ul className="nav nav-pills nav-flush flex-column mb-auto text-start">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link py-3 border-bottom" title="Bienvenida" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-home" aria-label="Bienvenida"></i>
              {!collapsed && <span className="nav-text">Bienvenida</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/BD_Categorias" className="nav-link py-3 border-bottom" title="Categorías" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-tags" aria-label="Categorías"></i>
              {!collapsed && <span className="nav-text">Categorías</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/BD_Productos" className="nav-link py-3 border-bottom" title="Productos" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-box" aria-label="Productos"></i>
              {!collapsed && <span className="nav-text">Productos</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/BD_Proveedores" className="nav-link py-3 border-bottom" title="Proveedores" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-truck" aria-label="Proveedores"></i>
              {!collapsed && <span className="nav-text">Proveedores</span>}
            </Link>
          </li>
          <li>
            <Link to="/dashboard/BD_Usuarios" className="nav-link py-3 border-bottom" title="Usuarios" data-bs-toggle="tooltip" data-bs-placement="right">
              <i className="fas fa-users" aria-label="Usuarios"></i>
              {!collapsed && <span className="nav-text">Usuarios</span>}
            </Link>
          </li>
        </ul>

        {/* Botón de alternancia con un icono */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <div className="toggle-icon">
            <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} size="lg" color="#fff" />
          </div>
        </div>

        {/* Dropdown para salir */}
        <div className="dropdown border-top mt-auto">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user"></i>
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li><a className="dropdown-item" href="#">Salir</a></li>
          </ul>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
