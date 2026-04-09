import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Category.css";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/img/Equipo1.jpg";

import sub8 from "../../assets/img/Equipo1.jpg";
import sub10 from "../../assets/img/Equipo2.jpg";
import sub13 from "../../assets/img/Equipo3.jpg";

export default function Category() {
  const categorias = [
    {
      nombre: "Baby",
      edad: "(2020 - 2021)",
      descripcion:
        "Introducción al fútbol, coordinación motriz y trabajo en equipo.",
      imagen: sub8,
    },
    {
      nombre: "Iniciación",
      edad: "(2018 - 2019)",
      descripcion:
        "Desarrollo de fundamentos técnicos y comprensión del juego.",
      imagen: sub10,
    },
    {
      nombre: "Transición",
      edad: "(2016 - 2017)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
      imagen: sub13,
    },
    {
      nombre: "Pre infantil",
      edad: "(2014 - 2015)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
      imagen: sub13,
    },
    {
      nombre: "Infantil",
      edad: "(2012 - 2013)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
      imagen: sub13,
    },
    {
      nombre: "Pre Juvenil",
      edad: "(2010 - 2011)",
      descripcion: "Entrenamiento táctico, físico y participación en torneos.",
      imagen: sub13,
    },
  ];

  return (
    <div className="category-page">
      <Header />

      <Hero
        title="Categorías"
        subtitle="Formamos jugadores según su edad y nivel ⚽"
        image={heroImg}
      />
      <main className="category-main">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className={`category-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="category-image">
              <img src={cat.imagen} alt={cat.nombre} />
            </div>

            <div className="category-info">
              <h2>{cat.nombre}</h2>
              <p className="category-age">{cat.edad}</p>
              <p>{cat.descripcion}</p>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
