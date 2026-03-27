import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function About() {

  return (
    <div className="about-page">

      <Header />

      {/* HERO */}
      <section className="about-hero">
        <h1>Quiénes Somos</h1>
        <p>
          Formamos jugadores con pasión, disciplina y valores dentro y fuera de la cancha.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="about-section">
        <div className="about-content">
          <h2>Historia</h2>
          <p>
            La Escuela de Fútbol Alianza Bogotá nace con el propósito de brindar
            a niños y jóvenes un espacio de formación deportiva integral. A lo largo
            del tiempo, hemos trabajado en el desarrollo de habilidades técnicas y
            humanas, promoviendo valores como el respeto, la disciplina y el trabajo
            en equipo.
          </p>
        </div>
      </section>

      {/* MISION Y VISION */}
      <section className="about-grid">

        <div className="about-card">
          <h2>Misión</h2>
          <p>
            Formar deportistas integrales mediante el fútbol, fortaleciendo valores
            y habilidades que contribuyan a su desarrollo personal y social.
          </p>
        </div>

        <div className="about-card">
          <h2>Visión</h2>
          <p>
            Ser una escuela líder en formación deportiva, reconocida por su calidad
            y compromiso con el desarrollo de jóvenes talentos.
          </p>
        </div>

      </section>

      {/* VALORES */}
      <section className="about-values">

        <h2>Valores</h2>

        <div className="values-grid">

          <div className="value-card">⚽ Respeto</div>
          <div className="value-card">⚽ Disciplina</div>
          <div className="value-card">⚽ Trabajo en equipo</div>
          <div className="value-card">⚽ Responsabilidad</div>
          <div className="value-card">⚽ Superación</div>

        </div>

      </section>

      <Footer />

    </div>
  );
}