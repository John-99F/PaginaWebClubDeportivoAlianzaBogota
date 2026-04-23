import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import AboutData from "./AboutInfo";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { getCollection, getDocument } from "../../services/firestore";
import "./About.css";

export default function About() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const hero = await getDocument("hero", "About");
        const contenido = await getCollection("contenido");
        setData({
          hero,
          contenido,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false); // 👈 termina de cargar
      }
    };

    load();
  }, []);

  // 👇 este sí detecta el cambio real de data
  useEffect(() => {
    console.log("data actualizada:", data);
  }, [data]);

  if (loading) {
    return (
      <div>
        <Header />
        <Loader />
        <Footer />
      </div>
    );
  }

  return (
    <div className="about-page">
      <Header />

      <Hero
        title={data.hero.titulo}
        subtitle={data.hero.descripcion}
        image={AboutData.imagenAbout}
      />
      <section className="about-section">
        <div className="about-content">
          <h2>{data.contenido[1].titulo}</h2>
          <p>{data.contenido[1].descripcion}</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h2>{data.contenido[2].titulo}</h2>
          <p>{data.contenido[2].descripcion}</p>
        </div>

        <div className="about-card">
          <h2>{data.contenido[4].titulo}</h2>
          <p>{data.contenido[4].descripcion}</p>
        </div>
      </section>

      <section className="about-values">
        <h2>{data.contenido[3].titulo}</h2>

        <div className="values-grid">
          {data.contenido[3].descripcion.map((valor) => (
            <div className="value-card">⚽ {valor}</div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
