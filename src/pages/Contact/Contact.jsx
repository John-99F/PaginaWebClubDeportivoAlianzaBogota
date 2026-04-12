import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import "./Contact.css";
import dataInfo from "../../services/dataInfo";
import { data } from "react-router-dom";

export default function Contact() {
  const telefono = "573105127034";
  const mensaje = "Hola, quiero información sobre la escuela de fútbol";

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <h1>{dataInfo.heroContenido.tituloContact}</h1>
        <p>{dataInfo.heroContenido.descripcionContact}</p>
      </section>

      <section className="contact-container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=Parque+San+Andres+Bochica+Bogota&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Mapa"
          ></iframe>
        </div>

        <div className="contact-info">
          <h2>{dataInfo.tituloContacto}</h2>
          <p>
            {dataInfo.contactos.direccion}
          </p>
          <p>
            <FaWhatsapp /> {dataInfo.contactos.telefono}
          </p>
          <p>
            <FaMailBulk /> {dataInfo.contactos.correo}
          </p>

          <div className="contact-buttons">
            <a
              href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
