import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import GalleryData from "./GalleryInfo";
import { getCollection, getDocument } from "../../services/firestore";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const hero = await getDocument("hero", "Gallery");

        setData({
          hero,
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
    <div className="gallery-page">
      <Header />

      <Hero
        title={data.hero.titulo}
        subtitle={data.hero.descripcion}
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
