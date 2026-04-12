import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import dataInfo from "../../services/dataInfo";

export default function About() {
  return (
    <div className="about-page">
      <Header />

      <section className="about-hero">
        <h1>{dataInfo.heroContenido.tituloAbout}</h1>
        <p>{dataInfo.heroContenido.descripcionAbout}</p>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>{dataInfo.contenidoCompleto.tituloHistoria}</h2>
          <p>{dataInfo.contenidoCompleto.historia}</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>{dataInfo.contenidoCompleto.tituloMision}</h2>
          <p>{dataInfo.contenidoCompleto.mision}</p>
        </div>

        <div className="about-card">
          <h2>{dataInfo.contenidoCompleto.tituloVision}</h2>
          <p>{dataInfo.contenidoCompleto.vision}</p>
        </div>
      </section>

      <section className="about-values">
        <h2>{dataInfo.contenidoCompleto.tituloValores}</h2>

        <div className="values-grid">
          {dataInfo.contenidoCompleto.valores.map((valor) => (
            <div className="value-card">⚽ {valor}</div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
