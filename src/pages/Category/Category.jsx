import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Category.css";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/img/Equipo1.jpg";
import data from "../../services/dataInfo";

import sub8 from "../../assets/img/Equipo1.jpg";
import sub10 from "../../assets/img/Equipo2.jpg";
import sub13 from "../../assets/img/Equipo3.jpg";
import dataInfo from "../../services/dataInfo";

export default function Category() {
  return (
    <div className="category-page">
      <Header />

      <Hero
        title={dataInfo.heroContenido.tituloCategory}
        subtitle={dataInfo.heroContenido.descripcionCategory}
        image={heroImg}
      />
      <main className="category-main">
        {data.categorias.map((cat, index) => (
          <div
            key={index}
            className={`category-card ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="category-image">
              <img src={cat.imagen} alt={cat.nombre} />
            </div>

            <div className="category-info">
              <h2>{cat.nombre}</h2>
              <p>{cat.descripcion}</p>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
