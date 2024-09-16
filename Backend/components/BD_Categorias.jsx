/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button, Table, Modal } from 'react-bootstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CategoriaAdmin = () => {
  const [categoriasList, setCategoriasList] = useState([]); // Renombramos categorias a categoriasList
  const [categoriaNombre, setCategoriaNombre] = useState(''); // Renombramos nombre a categoriaNombre
  const [categoriaId, setCategoriaId] = useState(null); // Renombramos editId a categoriaId
  const [isModalVisible, setIsModalVisible] = useState(false); // Renombramos showModal a isModalVisible

  useEffect(() => {
    obtenerCategorias(); // Fetch inicial
  }, []);

  const obtenerCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/categorias');
      setCategoriasList(response.data);
    } catch (error) {
      console.error('Error al obtener las categorías:', error);
    }
  };

  const manejarEnvioFormulario = async (e) => {
    e.preventDefault();
    try {
      if (categoriaId) {
        await axios.put(`http://localhost:3002/api/categorias/${categoriaId}`, { nombre: categoriaNombre });
        Swal.fire('Actualizado!', 'La categoría ha sido actualizada correctamente.', 'success');
      } else {
        await axios.post('http://localhost:3002/api/categorias', { nombre: categoriaNombre });
        Swal.fire('Agregado!', 'La categoría ha sido agregada correctamente.', 'success');
      }
      limpiarFormulario();
      setIsModalVisible(false);
      obtenerCategorias(); // Actualiza la lista después de agregar o editar
    } catch (error) {
      console.error('Error al guardar la categoría:', error);
      Swal.fire('Error!', `Hubo un problema al guardar la categoría: ${error.message}`, 'error');
    }
  };

  const manejarEdicion = (categoria) => {
    setCategoriaNombre(categoria.nombre);
    setCategoriaId(categoria.id);
    setIsModalVisible(true);
  };

  const manejarEliminacion = async (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3002/api/categorias/${id}`);
          Swal.fire('Eliminado!', 'La categoría ha sido eliminada correctamente.', 'success');
          obtenerCategorias(); // Actualiza la lista después de eliminar
        } catch (error) {
          console.error('Error al eliminar la categoría:', error);
          Swal.fire('Error!', `Hubo un problema al eliminar la categoría: ${error.message}`, 'error');
        }
      }
    });
  };

  const limpiarFormulario = () => {
    setCategoriaNombre('');
    setCategoriaId(null);
  };

  return (
    <div className="container-fluid">
      <h1>Gestión de Categorías</h1>

      <Button variant="primary" className="mb-3" onClick={() => {
        limpiarFormulario();
        setIsModalVisible(true);
      }}>
        Agregar Categoría
      </Button>

      <Table striped bordered hover className="table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriasList
            .slice()
            .sort((a, b) => a.id - b.id)
            .map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.id}</td>
                <td>{categoria.nombre}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <Button className="icon-button icon-edit" onClick={() => manejarEdicion(categoria)}>
                      <FaEdit />
                    </Button>
                    <Button className="icon-button icon-delete" onClick={() => manejarEliminacion(categoria.id)}>
                      <FaTrashAlt />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{categoriaId ? 'Editar Categoría' : 'Agregar Categoría'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={manejarEnvioFormulario}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value={categoriaNombre} onChange={(e) => setCategoriaNombre(e.target.value)} required />
            </div>
            <Button variant="primary" type="submit">
              {categoriaId ? 'Actualizar' : 'Agregar'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CategoriaAdmin;
