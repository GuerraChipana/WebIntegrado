import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Inicio';
import Categorias from './pages/Categorias';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import BD_Productos from '../Backend/components/BD_Productos';
import BD_Categorias from '../Backend/components/BD_Categorias';
import Productos from './pages/Productos';
import Carrito from './components/Carrito';
import '../src/style/Home.css';

const AppContent = () => {
  const location = useLocation();
  const rutasOcultas = ['/dashboard', '/BD_Categorias', '/BD_Productos'];
  const hideHeaderFooter = rutasOcultas.some(route => location.pathname.startsWith(route));

  // Estado del carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  return (
    <div>
      {/* Si la ruta no está en rutasOcultas, se renderizan el Header y el Footer */}
      {!hideHeaderFooter && <Header carrito={carrito} />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="BD_Productos" element={<BD_Productos />} />
            <Route path="BD_Categorias" element={<BD_Categorias />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </main>

      {/* Si la ruta no está en rutasOcultas, se renderizan el Header y el Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
