import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import Shedule from "../../components/Shedule/Shedule";
import { useNavigate } from "react-router-dom";
import dataInfo from "../../services/dataInfo";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>{dataInfo.heroContenido.tituloHome}</h1>
          <p>{dataInfo.heroContenido.descripcionHome} </p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscripcion"
          >
            Únete al equipo
          </a>
        </div>
      </section>

      <section className="horarios">
        <Shedule />
      </section>
      <section className="gallery-section">
        <h2>Nuestros mejores momentos</h2>
        <GalleryPhoto />
      </section>

      <main className="home-main">
        {dataInfo.contenido.map((c) => (
          <section key={c} className="home-card">
            <h2>{c.titulo.charAt(0).toUpperCase() + c.titulo.slice(1)}</h2>
            <p>{c.descripcion}</p>
          </section>
        ))}
      </main>

      <section className="categorias">
        <h2> Nuestras categorías de formación</h2>
        <div className="categorias-grid">
          {dataInfo.categorias.map((element, index) => {
            return (
              <div
                key={index}
                className="categoria-card"
                onClick={() => navigate("/category")}
              >
                <h3>{element.nombre}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="inscripciones">
        <h2>Inscripciones abiertas</h2>

        <p>
          Inscribe a tu hijo y haz parte de nuestra escuela de formación
          deportiva. Desarrollamos talento, disciplina y trabajo en equipo.
        </p>

        <a
          href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
