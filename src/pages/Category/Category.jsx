import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Category.css";
import Hero from "../../components/Hero/Hero";
import categoryData from "./CategoryInfo";

export default function Category() {
  return (
    <div className="category-page">
      <Header />

      <Hero
        title={categoryData.tituloCategory}
        subtitle={categoryData.descripcionCategory}
        image={categoryData.imagenCategoria}
      />
      <main className="category-main">
        {categoryData.categorias.map((cat, index) => (
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
