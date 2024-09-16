/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BD_Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [nombre, setNombre] = useState('');
  const [codigo, setCodigo] = useState('');
  const [editId, setEditId] = useState(null);

  // Obtener las categorías al cargar el componente
  useEffect(() => {
    axios.get('/api/categorias')
      .then(response => setCategorias(response.data))
      .catch(error => console.error('Error al obtener las categorías:', error));
  }, []);

  // Crear nueva categoría
  const crearCategoria = () => {
    axios.post('/api/categorias', { nombre, codigo })
      .then(response => {
        setCategorias([...categorias, response.data]);
        setNombre('');
        setCodigo('');
      })
      .catch(error => console.error('Error al crear la categoría:', error));
  };

  // Eliminar categoría
  const eliminarCategoria = (id) => {
    axios.delete(`/api/categorias/${id}`)
      .then(() => {
        setCategorias(categorias.filter(categoria => categoria.id !== id));
      })
      .catch(error => console.error('Error al eliminar la categoría:', error));
  };

  // Editar categoría
  const actualizarCategoria = () => {
    axios.put(`/api/categorias/${editId}`, { nombre, codigo })
      .then(() => {
        setCategorias(categorias.map(cat => (cat.id === editId ? { ...cat, nombre, codigo } : cat)));
        setEditId(null);
        setNombre('');
        setCodigo('');
      })
      .catch(error => console.error('Error al actualizar la categoría:', error));
  };

  return (
    <div>
      <h2>Categorías</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre de la categoría"
      />
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Código de la categoría"
      />
      <button onClick={editId ? actualizarCategoria : crearCategoria}>
        {editId ? 'Actualizar' : 'Crear'} Categoría
      </button>

      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>
            {categoria.nombre} - {categoria.codigo}
            <button onClick={() => { setEditId(categoria.id); setNombre(categoria.nombre); setCodigo(categoria.codigo); }}>Editar</button>
            <button onClick={() => eliminarCategoria(categoria.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BD_Categorias;
