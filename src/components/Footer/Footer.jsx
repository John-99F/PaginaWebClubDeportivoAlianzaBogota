import "./Footer.css";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Alianza Bogotá</h3>
          <p>
            Escuela de formación deportiva enfocada en desarrollar talento y
            disciplina en el fútbol.
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <p>Inicio</p>
          <p>Equipo</p>
          <p>Galería</p>
          <p>Contacto</p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍Bogotá, Colombia - Cll 82 100a -91</p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaWhatsapp /> +57 310 512 7034
          </a>
          <p>✉ info@alianzabogota.com</p>
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
