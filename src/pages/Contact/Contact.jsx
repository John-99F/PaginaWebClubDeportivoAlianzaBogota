import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";

import "./Contact.css";

export default function Contact() {
  const telefono = "573105127034";
  const mensaje = "Hola, quiero información sobre la escuela de fútbol";
  const correo = "info@alianzabogota.com";

  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <h1>Contáctanos</h1>
        <p>Estamos disponibles para brindarte toda la información</p>
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
          <h2>Información de contacto</h2>
          <p>📍 Bogotá, Colombia - Cll 82 100a -91</p>
          <p>
            <FaWhatsapp /> +57 310 512 7034
          </p>
          <p>
            <FaMailBulk /> info@alianzabogota.com
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

            <a
              href={`mailto:${correo}?subject=Información&body=${encodeURIComponent(mensaje)}`}
              className="btn-email"
            >
              <FaMailBulk /> Enviar correo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
