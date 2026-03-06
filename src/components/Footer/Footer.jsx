import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h3>Alianza Bogotá</h3>
          <p>Escuela de formación deportiva enfocada en desarrollar talento y disciplina en el fútbol.</p>
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
          <p>📍 Bogotá, Colombia</p>
          <p>📞 +57 300 000 0000</p>
          <p>✉ info@alianzabogota.com</p>
        </div>

      </div>

      <div className="footer-copy">
        © 2026 Alianza Bogotá - Todos los derechos reservados
      </div>

    </footer>
  );
}