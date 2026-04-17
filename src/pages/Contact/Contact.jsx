import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import "./Contact.css";
import contactInfo from "./ContactInfo";
import Hero from "../../components/Hero/Hero";

export default function Contact() {
  const telefono = "573105127034";
  const mensaje = "Hola, quiero información sobre la escuela de fútbol";

  return (
    <div className="contact-page">
      <Header />

      <Hero
        title={contactInfo.tituloContact}
        subtitle={contactInfo.descripcionContact}
        image={contactInfo.imagenContact}
      />

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
          <h2>{contactInfo.tituloContact}</h2>
          <p>{contactInfo.direccion}</p>
          <p>
            <FaWhatsapp /> {contactInfo.telefono}
          </p>
          <p>
            <FaMailBulk /> {contactInfo.correo}
          </p>

          <div className="contact-buttons">
            <a
              href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> {contactInfo.btnWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
