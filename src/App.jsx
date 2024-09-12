// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Inicio';
import Especialidades from './pages/Especialidades';
import DoctorsList from './pages/DoctorsList'; 
import './style/Home.css'; 

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/medicos" element={<DoctorsList />} /> {/* Asegúrate de usar DoctorsList */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
