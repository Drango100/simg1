import React from "react";
import './css/header.css';
import Servicio1 from './imagenes/servicios-1.png';
import Servicio2 from './imagenes/SERVICIO-2.png';
import Servicio3 from './imagenes/SERVICIOS-3.png';

function SectionServicios() {
        return (
        <section className="Madetalles" id="servicios">
            <div className="Madetalles-content">
                <h2>Los servicios que ofrece SIMG</h2>
                <p className="txt-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
            <div className="Madetalles-group">
                    <div className="Madetalles-1">
                    <img src={Servicio1} alt="Servicio 1" />
                    <h3>Gestión Eficiente de Inventario</h3>
                    </div>
                <div className="Madetalles-1">
                    <img src={Servicio2} alt="Servicio 2" />
                    <h3>Acceso Remoto y Centralizado</h3>
                </div>
                <div className="Madetalles-1">
                    <img src={Servicio3} alt="Servicio 3" />
                    <h3>ANALISIS Y REPORTE</h3>
                </div>
            </div>
            <a href="#contacto" className="btn-1">Informacion</a>
            </div>
        </section>
    );
};
export default SectionServicios;