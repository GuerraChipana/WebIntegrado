// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../style/Especialidades.css';
const Especialidades = () => {
    return (
        <main><section id="Especialidades" className="specialties">
        <h2>Nuestras Especialidades</h2>
        <div className="container">
            <div className="specialty">
                <img src="src\img\medicina_general.jpg" alt="Medicina General" />
                <i className="fas fa-stethoscope icon"></i>
                <div className="text-content">
                    <h4>Medicina General</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="specialty">
                <img src="src\img\pediatra.jpg" alt="Pediatría" />
                <i className="fas fa-baby icon"></i>
                <div className="text-content">
                    <h4>Pediatría</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="specialty">
                <img src="src\img\cardiologia.jpg" alt="Cardiología" />
                <i className="fas fa-heartbeat icon"></i>
                <div className="text-content">
                    <h4>Cardiología</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="specialty">
                <img src="src\img\ginecologia.jpg" alt="Ginecología" />
                <i className="fas fa-female icon"></i>
                <div className="text-content">
                    <h4>Ginecología</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='specialty'>
                <img src="src\img\dermatologia.jpg" alt="Dermatologia" />
                <i className="fas fa-stethoscope icon"></i>
                <div className='text-content'>
                    <h4>Dermatologia</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='specialty'>
                <img src="src\img\psicologia.jpg" alt="Psicologia" />
                <i className="fas fa-brain icon"></i>
                <div className='text-content'>
                    <h4>Psicologia</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='specialty'>
                <img src="src\img\odontologia.jpg" alt="Odontología" />
                <i className="fas fa-tooth icon"></i>
                <div className='text-content'>
                    <h4>Odontología</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='specialty'>
                <img src="src\img\oftalmologia.jpg" alt="Oftanmología" />
                <i className="fa-regular fa-eye icon"></i>
                <div className='text-content'>
                    <h4>Oftanmología</h4>
                    <a href="">Ver más <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
    </section></main>
        

    );
};

export default Especialidades;


