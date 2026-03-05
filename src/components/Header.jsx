import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Escuela alianza Bogota</h1>
      <nav className="header-nav">
        <a href="/">Inicio</a>
        <a href="/about">Nosotros</a>
        <a href="/gallery">Galería</a>
           <a href="/gallery">Contactanos</a>
      </nav>
    </header>
  );
}