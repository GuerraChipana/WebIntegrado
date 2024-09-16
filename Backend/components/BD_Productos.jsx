/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../style/BD_Productos.css'

function BD_Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [proveedorId, setProveedorId] = useState('');
  const [editId, setEditId] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productosResponse = await axios.get('http://localhost:3002/api/productos');
      const categoriasResponse = await axios.get('http://localhost:3002/api/categorias');
      const proveedoresResponse = await axios.get('http://localhost:3002/api/proveedores');

      setProductos(productosResponse.data);
      setCategorias(categoriasResponse.data);
      setProveedores(proveedoresResponse.data);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:3002/api/productos/${editId}`, {
          nombre,
          descripcion,
          precio,
          stock,
          categoria_id: categoriaId,
          proveedor_id: proveedorId,
        });
        Swal.fire('Actualizado!', 'El producto ha sido actualizado.', 'success');
      } else {
        await axios.post('http://localhost:3002/api/productos', {
          nombre,
          descripcion,
          precio,
          stock,
          categoria_id: categoriaId,
          proveedor_id: proveedorId,
        });
        Swal.fire('Agregado!', 'El producto ha sido agregado.', 'success');
      }
      resetForm();
      setShowModal(false);
      fetchData(); // Actualiza la lista de productos
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      Swal.fire('Error!', 'Hubo un problema al guardar el producto.', 'error');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3002/api/productos/${id}`);
        Swal.fire('Eliminado!', 'El producto ha sido eliminado.', 'success');
        fetchData(); // Actualiza la lista de productos
      } catch (error) {
        console.error('Error al eliminar producto:', error);
        Swal.fire('Error!', 'Hubo un problema al eliminar el producto.', 'error');
      }
    }
  };

  const handleEdit = (producto) => {
    setEditId(producto.id);
    setNombre(producto.nombre);
    setDescripcion(producto.descripcion);
    setPrecio(producto.precio);
    setStock(producto.stock);
    setCategoriaId(producto.categoria_id);
    setProveedorId(producto.proveedor_id);
    setShowModal(true);
  };

  const resetForm = () => {
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setStock('');
    setCategoriaId('');
    setProveedorId('');
    setEditId(null);
  };

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <Button variant="primary" onClick={() => setShowModal(true)}>Agregar Producto</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{categorias.find(categoria => categoria.id === producto.categoria_id)?.nombre || 'No asignada'}</td>
              <td>{proveedores.find(proveedor => proveedor.id === producto.proveedor_id)?.nombre || 'No asignado'}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(producto)}>Editar</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(producto.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input type="number" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input type="number" className="form-control" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoría</label>
              <select id="categoria" className="form-select" value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)} required>
                <option value="">Selecciona una categoría</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="proveedor" className="form-label">Proveedor</label>
              <select id="proveedor" className="form-select" value={proveedorId} onChange={(e) => setProveedorId(e.target.value)} required>
                <option value="">Selecciona un proveedor</option>
                {proveedores.map(proveedor => (
                  <option key={proveedor.id} value={proveedor.id}>{proveedor.nombre}</option>
                ))}
              </select>
            </div>
            <Button variant="primary" type="submit">
              {editId ? 'Actualizar' : 'Agregar'}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BD_Productos;
