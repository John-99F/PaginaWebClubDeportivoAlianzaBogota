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

      {/* HERO / GALERIA */}
      <section className="hero-section">
        <GalleryPhoto />
      </section>

      {/* INFORMACION */}
      <main className="home-main">

        {["vision", "mision", "historia", "valores"].map((c) => (
          <section key={c} className="home-card">

            <h2>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </h2>

            <p>{contenido[c]}</p>

          </section>
        ))}

      </main>

      {/* INSCRIPCIONES */}
      <section className="inscripciones-section">

        <div className="inscripciones-content">

          <h2>Inscripciones abiertas ⚽</h2>

          <p>
            Forma parte de nuestra escuela de fútbol y desarrolla tus
            habilidades deportivas con entrenadores capacitados y un
            ambiente de disciplina y trabajo en equipo.
          </p>

          <button className="btn-inscripcion">
            Contactar
          </button>

        </div>

      </section>

      <Footer />

    </div>
  );
}