import { Link } from 'react-router-dom';
import '../style/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar bg-dark text-white">
        <a href="/" className="sidebar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="40">
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Barra lateral</span>
        </a>
        <hr className="sidebar-divider" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#home" />
              </svg>
              Bienvenido
            </Link>
          </li>
          <li>
            <Link to="/BD_Categorias" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2" />
              </svg>
              Categorías
            </Link>
          </li>
          <li>
            <Link to="/BD_Productos" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table" />
              </svg>
              Productos
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid" />
              </svg>
              Proveedores
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle" />
              </svg>
              Clientes
            </Link>
          </li>
        </ul>
        <hr className="sidebar-divider" />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='fas fa-user'><br /></i>          
            <br />  
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><Link className="dropdown-item" to="#"></Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="/Login">Salir</Link></li>
          </ul>
        </div>
      </div>
      {/* Aquí podrías agregar el contenido principal del Dashboard */}
      <div className="dashboard-content">
        {/* Aquí se renderizará el contenido de las rutas internas del Dashboard */}
      </div>
    </div>
  );
}

export default Dashboard;
