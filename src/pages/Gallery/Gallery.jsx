import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import equipo4 from "../../assets/img/Equipo4.jpg";
import equipo5 from "../../assets/img/Equipo5.jpg";
import equipo3 from "../../assets/img/Equipo3.jpg";
import "./Gallery.css";

export default function Gallery() {

  const imagenes = [
    { id: 1, src: equipo4, titulo: "Entrenamiento en equipo" },
    { id: 2, src: equipo5, titulo: "Partido amistoso" },
    { id: 3, src: equipo3, titulo: "Celebración de victoria" },
  ];

  return (
    <div className="gallery-page">

      <Header />

      {/* HERO */}
      <section className="gallery-hero">
        <h1>Galería</h1>
        <p>Momentos destacados de nuestra escuela ⚽</p>
      </section>

      {/* GALERÍA */}
      <main className="gallery-main">
        {imagenes.map((img) => (
          <div key={img.id} className="gallery-item">
            <img src={img.src} alt={img.titulo} />
            <div className="overlay">
              <p>{img.titulo}</p>
            </div>
          </div>
        ))}
      </main>

      <Footer />

    </div>
  );
}