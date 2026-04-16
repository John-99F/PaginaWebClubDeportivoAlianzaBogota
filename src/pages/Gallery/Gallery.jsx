import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import equipo4 from "../../assets/img/Equipo4.jpg";
import equipo5 from "../../assets/img/Equipo5.jpg";
import equipo3 from "../../assets/img/Equipo3.jpg";
import "./Gallery.css";
import dataInfo from "../../services/dataInfo";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/img/IMG_0192.jpg";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const imagenes = [
    { id: 1, src: equipo4, titulo: "Entrenamiento en equipo" },
    { id: 2, src: equipo5, titulo: "Partido amistoso" },
    { id: 3, src: equipo3, titulo: "Celebración de victoria" },
  ];

  return (
    <div className="gallery-page">
      <Header />

      <Hero
        title={dataInfo.heroContenido.tituloGallery}
        subtitle={dataInfo.heroContenido.descripcionGallery}
        image={heroImg}
      />

      {/* GALERÍA */}
      <main className="gallery-main">
        {imagenes.map((img) => (
          <div key={img.id} className="gallery-item">
            <img
              src={img.src}
              alt={img.titulo}
              onClick={() => setSelectedImg(img.src)}
            />
            <div className="overlay">
              <p>{img.titulo}</p>
            </div>
          </div>
        ))}
      </main>

      {/* MODAL */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="grande" className="modal-img" />
        </div>
      )}

      <Footer />
    </div>
  );
}
