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
  return (
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>{homeInfo.tituloHome}</h1>
          <p>{homeInfo.descripcionHome} </p>
          <a
            href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscripcion"
          >
            {homeInfo.textoBotonUnete}
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
        {homeInfo.contenido.map((c) => (
          <section key={c} className="home-card">
            <h2>{c.titulo.charAt(0).toUpperCase() + c.titulo.slice(1)}</h2>
            <p>{c.descripcion}</p>
          </section>
        ))}
      </main>

      <section className="categorias">
        <h2>{homeInfo.tituloCategorias}</h2>
        <div className="categorias-grid">
          {homeInfo.categorias.map((element, index) => {
            return (
              <div
                key={index}
                className="categoria-card"
                onClick={() => navigate("/category")}
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
            <h2>{homeInfo.afiliacionTitulo}</h2>
            <p>{homeInfo.afiliacion}</p>
          </div>

          <div className="club-info-image">
            <img src={logoLFB} alt="Club Deportivo" />
          </div>
        </div>
      </section>

      <section className="inscripciones">
        <h2>{homeInfo.inscripcionesTitulo}</h2>
        <p>{homeInfo.inscripcionesDescripcion}</p>
        <a
          href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          {homeInfo.textoBotonWhatsapp}
        </a>
      </section>

      <Footer />
    </div>
  );
}
