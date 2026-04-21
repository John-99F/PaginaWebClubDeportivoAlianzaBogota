import "./Header.css";
import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom"; // 👈 IMPORTANTE
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Escudo Alianza Bogotá" />
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/">{HeaderInfo.inicio}</Link>
          <Link to="/about" onClick={window.scrollTo(0, 0)}>
            {HeaderInfo.nosotros}
          </Link>
          <Link to="/gallery" onClick={window.scrollTo(0, 0)}>
            {HeaderInfo.galeria}
          </Link>
          <Link to="/category" onClick={window.scrollTo(0, 0)}>
            {HeaderInfo.categoria}
          </Link>
          <Link to="/contact" onClick={window.scrollTo(0, 0)}>
            {HeaderInfo.contactos}
          </Link>
        </nav>
      </div>
    </header>
  );
}