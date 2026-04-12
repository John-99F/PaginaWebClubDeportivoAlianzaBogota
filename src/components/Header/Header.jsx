import "./Header.css";
import logo from "../../assets/img/logo.jpeg";
import dataInfo from "../../services/dataInfo";

export default function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <div className="header-logo">
          <img src={logo} alt="Escudo Alianza Bogotá" />
        </div>

        <nav className="header-nav">
          <a href="/">{dataInfo.header.inicio}</a>
          <a href="/about">{dataInfo.header.nosotros}</a>
          <a href="/gallery">{dataInfo.header.galeria}</a>
          <a href="/category">{dataInfo.header.categoria}</a>
          <a href="/contact">{dataInfo.header.contactos}</a>
        </nav>

      </div>

    </header>
  );
}