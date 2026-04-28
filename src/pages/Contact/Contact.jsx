import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { getCollection, getDocument } from "../../services/firestore";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Contact.css";
import contactInfo from "./ContactInfo";
import Hero from "../../components/Hero/Hero";

export default function Contact() {
  const telefono = "573105127034";
  const mensaje =
    "Hola,\nEstoy interesad@ en recibir información sobre el Club Alianza Bogotá.\nEl año de nacimiento de mi hijo es: [AÑO]";
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const hero = await getDocument("hero", "Contact");
        const botones = await getDocument("boton", "contacto");
        const contacto = await getDocument("contenido", "contactos");
        setData({
          hero,
          botones,
          contacto,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false); // 👈 termina de cargar
      }
    };

    load();
  }, []);

  // 👇 este sí detecta el cambio real de data
  useEffect(() => {
    console.log("data actualizada:", data);
  }, [data]);

  if (loading) {
    return (
      <div>
        <Header />
        <Loader />
        <Footer />
      </div>
    );
  }

  return (
    <div className="contact-page">
      <Header />

      <Hero
        title={data.hero.titulo}
        subtitle={data.hero.descripcion}
        image={contactInfo.hero.imagenContact}
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
          <h2>{data.hero.titulo}</h2>
          <p>{data.contacto.direccion}</p>
          <p>
            <FaWhatsapp /> {data.contacto.telefono}
          </p>
          <p>
            <FaMailBulk /> {data.contacto.correo}
          </p>

          <div className="contact-buttons">
            <a
              href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp /> {data.botones.texto}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
