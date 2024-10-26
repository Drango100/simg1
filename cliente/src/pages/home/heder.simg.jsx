import React from "react";
import logo from './imagenes/logo-de-sigma en blanco.png';
import menu from'./imagenes/menu.png';
import './css/header.css';


function Header() {
return (
    <header className="header">
        <div className="menu container">
                <a href="/home" className="logo">
                    <img src={logo} alt="Logo" />
                </a>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu">
                <img src={menu} className="menu-icono" alt="Menu Icono" />
            </label>
            <nav className="navbar">
                <ul>
                    <li><a href="/login">Inicio Sesion</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                </nav>
        </div>
        <div className="header-content">
            <h1>SIMG</h1>
            <p>
            Bienvenido a SIMG, tu solución integral de gestión de inventarios. Con SIMG,
            gestionar tus productos nunca ha sido tan fácil y eficiente...
            </p>
            <a href="#" className="btn-1">Informacion</a>
        </div>
    </header>
    );
};
export default Header;