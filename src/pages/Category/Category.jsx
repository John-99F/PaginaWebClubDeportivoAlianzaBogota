import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Category.css";
import Hero from "../../components/Hero/Hero";
import categoryData from "./CategoryInfo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollection, getDocument } from "../../services/firestore";
import Loader from "../../components/Loader/Loader";

export default function Category() {
  const { categoria } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const hero = await getDocument("hero", "categorias");

        const categorias = await getCollection("categorias");

        setData({
          hero,
          categorias,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false); // 👈 termina de cargar
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (loading) return; // 👈 clave
    if (!categoria || !data.categorias) return;

    const navbar = document.querySelector("header");
    const offset = navbar ? navbar.offsetHeight : 80;

    const elemento = document.getElementById(categoria);

    if (elemento) {
      const y =
        elemento.getBoundingClientRect().top + window.pageYOffset - offset - 10;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [categoria, data]);
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
    <div className="category-page">
      <Header />

      <Hero
        title={categoryData.hero.tituloCategory}
        subtitle={categoryData.hero.descripcionCategory}
        image={categoryData.hero.imagenCategoria}
      />
      <main className="category-main">
        {data.categorias
          ?.sort((a, b) => a.Index - b.Index)
          .filter((cat) => cat.rango_anos && cat.rango_anos.trim() !== "") // 👈 filtro
          .map((cat, index) => (
            <div
              id={cat.categoria.toLowerCase().replace(/\s+/g, "-")}
              key={index}
              className={`category-card ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="category-image">
                <img
                  src={categoryData.categorias[index].imagen}
                  alt={cat.nombre}
                />
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
