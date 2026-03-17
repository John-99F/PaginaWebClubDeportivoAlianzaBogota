import "./Header.css";
import logo from "../../assets/img/logo.jpeg";

export default function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <div className="header-logo">
          <img src={logo} alt="Escudo Alianza Bogotá" />
        </div>

        <nav className="header-nav">
          <a href="/">Inicio</a>
          <a href="/about">Nosotros</a>
          <a href="/gallery">Galería</a>
          <a href="/history">Historia</a>
          <a href="/category">Categorías</a>
          <a href="/contact">Contáctanos</a>
        </nav>

      </div>

    </header>
  );
}