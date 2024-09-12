// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Medicos from '../components/Medicos'; // Asegúrate de importar Medicos desde components
import doctorImage from '../img/doctor-usuario.jpg'; // Verifica la ruta de la imagen
import doctoraImage from '../img/doctora-usuario.jpg';
const doctors = [
  {
    name: 'Fernando Alonso',
    specialty: 'Cardiología',
    days: 'Lunes - Miércoles - Viernes',
    img: doctorImage,
  },
  {
    name: 'Marta García',
    specialty: 'Dermatología',
    days: 'Martes - Jueves',
    img: doctoraImage,
  },
  {
    name: 'Luis Pérez',
    specialty: 'Pediatría',
    days: 'Lunes - Miércoles',
    img: doctorImage,
  },
  {
    name: 'Ana Romero',
    specialty: 'Ginecología',
    days: 'Lunes - Viernes',
    img: doctoraImage,
  },

  {
    name: 'Anastacio Romero',
    specialty: 'Ginecología',
    days: 'Lunes - Viernes',
    img: doctorImage,
  },

];

const DoctorsList = () => {
  return (
    <Container className="mt-4">
      <Row>
        {doctors.map((doctor, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Medicos
              name={doctor.name}
              specialty={doctor.specialty}
              days={doctor.days}
              img={doctor.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsList;
