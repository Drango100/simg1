import React from "react";
import './css/contact.css';

function ContactSection() {
    return (
        <>
        <section className="general" id="contacto">
            <div className="general-1">
            <h2>Estamos Ubicados</h2>
            <p>Dale en más información para obtener Google Maps</p>
            <a href="https://maps.app.goo.gl/USzdx8gTZzN8fLzX6" className="btn-1">Google
            Maps</a>
            </div>
            <div className="general-2"></div>
        </section>
        <section className="general">
            <div className="general-3"></div>
            <div className="general-1">
            <h2>Contáctanos</h2>
            <p>
            Si ocupa escribirnos, en el botón de información lo llevará enseguida con uno de nuestros
            asesores.
            10
            </p>
            <a href="https://wa.me/3025162516" className="btn-1">Información</a>
            </div>
        </section>
        </>
    );
}
export default ContactSection;