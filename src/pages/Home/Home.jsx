import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import Shedule from "../../components/Shedule/Shedule";
import logoLFB from "../../assets/img/Logo_LFB.png";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { testConnection } from "../../services/testFirebase";
import { getCollection, getDocument } from "../../services/firestore";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const format = (text) => text.toLowerCase().replace(/\s+/g, "-");
  const telefono = "573105127034";
  const mensaje =
    "Hola,\nEstoy interesad@ en recibir información sobre el Club Alianza Bogotá.\nEl año de nacimiento de mi hijo es: [AÑO]";
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); // 👈 nuevo estado

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const hero = await getDocument("hero", "Home");
        const afiliacion = await getDocument("home", "Afiliacion");
        const inscripciones = await getDocument("home", "Inscripciones");
        const categorias = await getCollection("categorias");
        const botones = await getCollection("boton");
        const contenido = await getCollection("contenido");
        setData({
          hero,
          afiliacion,
          inscripciones,
          categorias,
          botones,
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
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>{data.hero.titulo}</h1>
          <p>{data.hero.descripcion} </p>
          <a
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscripcion"
          >
            {data.botones[1].texto}
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
        {data.contenido
          ?.filter((c) => c.titulo && c.titulo.trim() !== "") // 👈 valida título
          .map((c, index) => (
            <section
              key={index}
              className="home-card"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              <h2>{c.titulo.charAt(0).toUpperCase() + c.titulo.slice(1)}</h2>
              <p>{c.resumen}</p>
            </section>
          ))}
      </main>

      <section className="categorias">
        <h2>{data.categorias[1].Titulo}</h2>
        <div className="categorias-grid">
          {data.categorias
            ?.sort((a, b) => a.Index - b.Index)
            .filter((cat) => cat.rango_anos && cat.rango_anos.trim() !== "") // 👈 filtro
            .map((element, index) => {
              return (
                <div
                  key={index}
                  className="categoria-card"
                  onClick={() => {
                    console.log(element.categoria);
                    navigate(`/category/${format(element.categoria)}`);
                  }}
                >
                  <h3>{element.rango_anos} :</h3>
                  <h3>{element.categoria}</h3>
                </div>
              );
            })}
        </div>
      </section>

      <section className="club-info">
        <div className="club-info-container">
          <div className="club-info-text">
            <h2>{data.afiliacion.titulo}</h2>
            <p>{data.afiliacion.descripcion}</p>
          </div>

          <div className="club-info-image">
            <img src={logoLFB} alt="Club Deportivo" />
          </div>
        </div>
      </section>

      <section className="inscripciones">
        <h2>{data.inscripciones.titulo}</h2>
        <p>{data.inscripciones.descripcion}</p>
        <a
          href="https://wa.me/573105127034?text=Hola%20quiero%20información%20sobre%20la%20escuela%20de%20fútbol"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          {data.botones[2].texto}
        </a>
      </section>

      <Footer />
    </div>
  );
}
