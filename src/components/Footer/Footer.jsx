import "./Footer.css";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{FooterInfo.nombreClub}</h3>
          <p>{FooterInfo.descripcion}</p>
        </div>

        <div className="footer-section">
          <h3>{FooterInfo.tituloEnlaces}</h3>
          <p>{FooterInfo.enlaces.inicio}</p>
          <p>{FooterInfo.enlaces.nosotros}</p>
          <p>{FooterInfo.enlaces.galeria}</p>
          <p>{FooterInfo.enlaces.categoria}</p>
          <p>{FooterInfo.enlaces.contactos}</p>
        </div>

        <div className="footer-section">
          <h3>{FooterInfo.tituloContacto}</h3>
          <p>{FooterInfo.direccion}</p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> {FooterInfo.telefono}
          </a>
          <p>✉ {FooterInfo.correo}</p>
        </div>

        <div className="social-links">
          <h3>{FooterInfo.tituloSiguenos}</h3>
          <a
            href= {FooterInfo.redesSociales.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> {FooterInfo.redesSociales.instagram.nombre}
          </a>
          <a
            href={FooterInfo.redesSociales.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> {FooterInfo.redesSociales.facebook.nombre}
          </a>
          <a
            href={FooterInfo.redesSociales.tiktok.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok /> {FooterInfo.redesSociales.tiktok.nombre}
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © 2026 Club Deportivo Alianza Bogotá - Todos los derechos reservados
      </div>
    </footer>
  );
}
