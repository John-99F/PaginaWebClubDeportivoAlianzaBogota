import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Category.css";
import Hero from "../../components/Hero/Hero";
import categoryData from "./CategoryInfo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Category() {
  const { categoria } = useParams();
  useEffect(() => {
    const navbar = document.querySelector("header"); // o tu clase real
    const offset = navbar ? navbar.offsetHeight : 80;

    const scrollConOffset = (elemento) => {
      const y =
        elemento.getBoundingClientRect().top + window.pageYOffset - offset - 10; // pequeño ajuste extra 👌

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    if (categoria) {
      const elemento = document.getElementById(categoria);

      if (elemento) {
        // ⏳ pequeño delay para asegurar render
        setTimeout(() => {
          scrollConOffset(elemento);
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoria]);
  return (
    <div className="category-page">
      <Header />

      <Hero
        title={categoryData.hero.tituloCategory}
        subtitle={categoryData.hero.descripcionCategory}
        image={categoryData.hero.imagenCategoria}
      />
      <main className="category-main">
        {categoryData.categorias.map((cat, index) => (
          <div
            id={cat.categoria.toLowerCase().replace(/\s+/g, "-")}
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
