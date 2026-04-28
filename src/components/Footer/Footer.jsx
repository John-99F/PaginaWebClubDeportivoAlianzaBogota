import "./Footer.css";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import FooterInfo from "./FooterInfo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { testConnection } from "../../services/testFirebase";
import { getCollection, getDocument } from "../../services/firestore";
import Loader from "../../components/Loader/Loader";

export default function Footer() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const telefono = "573105127034";

  const mensaje =
    "Hola,\nEstoy interesad@ en recibir información sobre el Club Alianza Bogotá.\nEl año de nacimiento de mi hijo es: [AÑO]";
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const contenido = await getDocument("contenido", "contactos");
        const camposSimples = await getDocument("footer", "camposSimples");
        const redesSociales = await getDocument("footer", "redes_sociales");
        const enlaces = await getDocument("footer", "enlaces");

        setData({
          contenido,
          camposSimples,
          redesSociales,
          enlaces,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false); // 👈 termina de cargar
      }
    };

    load();
  }, []);

  useEffect(() => {
    console.log("data actualizada:", data);
  }, [data]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{data.camposSimples.nombre_club}</h3>
          <p>{data.camposSimples.descripcion}</p>
        </div>

        <div className="footer-section">
          <h3>{data.camposSimples.titulo_enlaces}</h3>

          <Link className="footer-section-nav" to="/">
            {data.enlaces.inicio}
          </Link>
          <Link className="footer-section-nav" to="/about">
            {data.enlaces.nosotros}
          </Link>
          <Link className="footer-section-nav" to="/gallery">
            {data.enlaces.galeria}
          </Link>
          <Link className="footer-section-nav" to="/category">
            {data.enlaces.categoria}
          </Link>
          <Link className="footer-section-nav" to="/contact">
            {data.enlaces.contactos}
          </Link>
        </div>
        <div className="footer-section">
          <h3>{data.camposSimples.titulo_contacto}</h3>
          <p>{data.contenido.direccion}</p>
          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> {data.contenido.telefono}
          </a>
          <p>✉ {data.contenido.correo}</p>
        </div>

        <div className="social-links">
          <h3>{data.camposSimples.titulo_siguenos}</h3>
          <a
            href={data.redesSociales.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> {data.redesSociales.instagram.nombre}
          </a>
          <a
            href={data.redesSociales.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> {data.redesSociales.facebook.nombre}
          </a>
          <a
            href={data.redesSociales.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok /> {data.redesSociales.tiktok.nombre}
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © 2026 Club Deportivo Alianza Bogotá - Todos los derechos reservados
      </div>
    </footer>
  );
}
