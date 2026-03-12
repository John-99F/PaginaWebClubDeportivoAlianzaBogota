import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Escuela Alianza Bogotá</h1>
      <nav className="header-nav">
        <a href="/">Inicio</a>
        <a href="/about">Nosotros</a>
        <a href="/gallery">Galería</a>
        <a href="/history">Historia</a>
        <a href="/category">Categorias</a>
        <a href="/contact">Contactanos</a>
      </nav>
    </header>
  );
}