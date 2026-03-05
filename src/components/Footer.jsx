import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Escuela de Fútbol</h3>
          <p>Formando talento y disciplina desde 2026.</p>
        </div>

        <div className="footer-section">
          <h4>Ubicación</h4>
          <p>Monserrate, Bogotá, Colombia</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Escuela de Fútbol. Todos los derechos reservados.
      </div>
    </footer>
  );
}