// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/Medicos.css'; // Importa el archivo CSS de Medicos

// eslint-disable-next-line react/prop-types
const Medicos = ({ name, specialty, days, img }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ width: '18rem', borderRadius: '10px' }}>
      <Card.Img variant="top" src={img} style={{ borderRadius: '50%', width: '50%', margin: '1rem auto' }} />
      <Card.Body className="text-center">
        <Card.Title style={{ color: '#007bff' }}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Especialidad: {specialty}</Card.Subtitle>
        <Card.Text>
          <i className="bi bi-calendar3"></i> {days}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Medicos;
