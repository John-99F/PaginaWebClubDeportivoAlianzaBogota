import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getContenido } from "../../services/api";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import "./Home.css";

export default function Home() {
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    getContenido().then((res) => setContenido(res));
  }, []);

  return (
    <div className="home-page">

      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Escuela de Fútbol Alianza Bogotá ⚽</h1>
          <p>
            Formamos deportistas con disciplina, valores y pasión por el fútbol.
          </p>
          <button className="hero-btn">Únete al equipo</button>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Galería</h2>
        <GalleryPhoto />
      </section>

      <main className="home-main">
        {["vision", "mision", "historia", "valores"].map((c) => (
          <section key={c} className="home-card">
            <h2>{c.charAt(0).toUpperCase() + c.slice(1)}</h2>
            <p>{contenido[c]}</p>
          </section>
        ))}
      </main>

      <section className="categorias">
        <h2>Categorías de Formación</h2>

        <div className="categorias-grid">

          <div className="categoria-card">
            <h3>Sub 8</h3>
            <p>Niños de 6 a 8 años</p>
          </div>

          <div className="categoria-card">
            <h3>Sub 10</h3>
            <p>Niños de 9 a 10 años</p>
          </div>

          <div className="categoria-card">
            <h3>Sub 13</h3>
            <p>Niños de 11 a 13 años</p>
          </div>

          <div className="categoria-card">
            <h3>Sub 16</h3>
            <p>Jóvenes de 14 a 16 años</p>
          </div>

        </div>
      </section>

      <section className="inscripciones">
        <h2>Inscripciones abiertas</h2>

        <p>
          Inscribe a tu hijo y haz parte de nuestra escuela de formación
          deportiva. Desarrollamos talento, disciplina y trabajo en equipo.
        </p>

        <button className="btn-inscripcion">
          Contactar
        </button>
      </section>

      <Footer />

    </div>
  );
}