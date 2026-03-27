import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getContenido } from "../../services/api";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import Shedule from "../../components/Shedule/Shedule";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    getContenido().then((res) => setContenido(res));
  }, []);

  const categorias = [
    {
      nombre: "Baby",
      edad: "(2020 - 2021)",
      descripcion:
        "Introducción al fútbol, coordinación motriz y trabajo en equipo.",
    },
    {
      nombre: "Iniciación",
      edad: "(2018 - 2019)",
      descripcion:
        "Desarrollo de fundamentos técnicos y comprensión del juego.",
    },
    {
      nombre: "Transición",
      edad: "(2016 - 2017)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
    },
    {
      nombre: "Pre infantil",
      edad: "(2014 - 2015)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
    },
    {
      nombre: "Infantil",
      edad: "(2012 - 2013)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
    },
    {
      nombre: "Pre Juvenil",
      edad: "(2010 - 2011)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
    },
  ];

  return (
    <div className="home-page">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Escuela de Fútbol Alianza Bogotá ⚽</h1>
          <p>
            Formamos deportistas con disciplina, valores y pasión por el fútbol.
          </p>
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
      <section className="horarios">
        <Shedule />
      </section>

      <section className="categorias">
        <h2> Nuestras categorías de formación</h2>
        <div className="categorias-grid">
          {categorias.map((element, index) => {
            return (
              <div
                key={index}
                className="categoria-card"
                onClick={() => navigate("/category")}
              >
                <h3>{element.nombre}</h3>
                <p>{element.edad}</p>
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
          className="btn-inscripcion"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
