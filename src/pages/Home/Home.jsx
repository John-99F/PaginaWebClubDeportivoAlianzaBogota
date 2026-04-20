import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import Shedule from "../../components/Shedule/Shedule";
import { useNavigate } from "react-router-dom";
import homeInfo from "./HomeInfo";
import logoLFB from "../../assets/img/Logo_LFB.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const format = (text) => text.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>{homeInfo.Hero.tituloHome}</h1>
          <p>{homeInfo.Hero.descripcionHome} </p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscripcion"
          >
            {homeInfo.botones.textoBotonUnete}
          </a>
        </div>
      </section>

      <section className="horarios">
        <Shedule />
      </section>
      <section className="gallery-section">
        <GalleryPhoto />
      </section>

      <main className="home-main">
        {homeInfo.sectionContenido.map((c) => (
          <section
            key={c}
            className="home-card"
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
          >
            <h2>{c.titulo.charAt(0).toUpperCase() + c.titulo.slice(1)}</h2>
            <p>{c.descripcion}</p>
          </section>
        ))}
      </main>

      <section className="categorias">
        <h2>{homeInfo.sectionCategorias.tituloCategorias}</h2>
        <div className="categorias-grid">
          {homeInfo.sectionCategorias.categorias.map((element, index) => {
            return (
              <div
                key={index}
                className="categoria-card"
                onClick={() => {
                  console.log(element.categoria);
                  navigate(`/category/${format(element.categoria)}`);
                }}
              >
                <h3>{element.edad} :</h3>
                <h3>{element.categoria}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="club-info">
        <div className="club-info-container">
          <div className="club-info-text">
            <h2>{homeInfo.sectionAfiliacion.afiliacionTitulo}</h2>
            <p>{homeInfo.sectionAfiliacion.afiliacion}</p>
          </div>

          <div className="club-info-image">
            <img src={logoLFB} alt="Club Deportivo" />
          </div>
        </div>
      </section>

      <section className="inscripciones">
        <h2>{homeInfo.sectionInscripciones.inscripcionesTitulo}</h2>
        <p>{homeInfo.sectionInscripciones.inscripcionesDescripcion}</p>
        <a
          href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          {homeInfo.botones.textoBotonWhatsapp}
        </a>
      </section>

      <Footer />
    </div>
  );
}
