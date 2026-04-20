import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import GalleryData from "./GalleryInfo";
import "./Gallery.css";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery-page">
      <Header />

      <Hero
        title={GalleryData.hero.tituloGallery}
        subtitle={GalleryData.hero.descripcionGallery}
        image={GalleryData.hero.imagenHero}
      />

      <main className="gallery-main">
        {GalleryData.imagenes.map((img) => (
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
