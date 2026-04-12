import { data } from "react-router-dom";
import dataInfo from "../../services/dataInfo";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{dataInfo.nombreClub}</h3>
          <p>
            {dataInfo.footer.descripcion}
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <p>{dataInfo.header.inicio}</p>
          <p>{dataInfo.header.nosotros}</p>
          <p>{dataInfo.header.galeria}</p>
          <p>{dataInfo.header.categoria}</p>
          <p>{dataInfo.header.contactos}</p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>{dataInfo.contactos.direccion}</p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaWhatsapp /> {dataInfo.contactos.telefono}
          </a>
          <p>✉ {dataInfo.contactos.correo}</p>
        </div>

        <div className="social-links">
          <h3>Siguenos</h3>
          <a
            href="https://www.instagram.com/alianzabogota/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.facebook.com/clubalianzabogota/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.tiktok.com/@alianzabogota"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>

      <div className="footer-copy">
        © 2026 Club Deportivo Alianza Bogotá - Todos los derechos reservados
      </div>
    </footer>
  );
}
