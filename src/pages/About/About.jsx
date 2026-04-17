import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import AboutData from "./AboutInfo";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Header />

      <Hero
        title={AboutData.tituloAbout}
        subtitle={AboutData.descripcionAbout}
        image={AboutData.imagenAbout}
      />
      <section className="about-section">
        <div className="about-content">
          <h2>{AboutData.tituloHistoria}</h2>
          <p>{AboutData.historia}</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>{AboutData.tituloMision}</h2>
          <p>{AboutData.mision}</p>
        </div>

        <div className="about-card">
          <h2>{AboutData.tituloVision}</h2>
          <p>{AboutData.vision}</p>
        </div>
      </section>

      <section className="about-values">
        <h2>{AboutData.tituloValores}</h2>

        <div className="values-grid">
          {AboutData.valores.map((valor) => (
            <div className="value-card">⚽ {valor}</div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
