import React from "react";
import './css/header.css';
import servico1 from './imagenes/servicio1.png';
import servicio2 from './imagenes/servicio2.png';
import servicio3 from './imagenes/servicio3.png';
function Main() {
    return (
        <main className="services">
            <div className="services-content container">
                <h2>Conoce más sobre los servicios</h2>
                8
                <div className="services-group">
                    <div className="services-1">
                        <img src={servico1} alt="Servicio 1" />
                        <h3>Gestión Eficiente de Inventario</h3>
                    </div>
                    <div className="services-1">
                        <img src={servicio2} alt="Servicio 2" />
                        <h3>Acceso Remoto y Centralizado</h3>
                    </div>
                    <div className="services-1">
                        <img src={servicio3} alt="Servicio 3" />
                        <h3>ANÁLISIS Y REPORTE</h3>
                    </div>
                </div>
                <p>
                El éxito en los negocios se logra a través de la gestión efectiva de las personas, los
                procesos y los recursos.
                </p>
                <a href="#" className="btn-1">Informacion</a>
            </div>
        </main>
    );
}
export default Main;