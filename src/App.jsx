// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Inicio';
import Categorias from './pages/Categorias';
import Nosotros from './pages/Nosotros';
import Login from './pages/Login'
import '../src/style/Home.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />

          <Route path="/Categorias" element={<Categorias />} />
          <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
