import { useState, useEffect } from "react";
import "./GalleryPhoto.css";
import futbol1 from "../../assets/img/futbol1.jpg";
import futbol2 from "../../assets/img/Futbol2.jpeg";
import futbol3 from "../../assets/img/Futbol3.jpg";
import { getDocument } from "../../services/firestore";


export default function GalleryPhoto() {
  const images = [futbol1, futbol2, futbol3];
  const [index, setIndex] = useState(0);

  // Movimiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const contenido = await getDocument("home", "Formacion");

        setData({
          contenido,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
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
      </div>
    );
  }
  return (
    <div className="gallery-layout">
      {/* IZQUIERDA - GALERÍA */}
      <div className="gallery-left">
        <div className="gallery">
          <div className="gallery-photo-container">
            <img src={images[index]} alt="galeria" />
          </div>
        </div>
      </div>

      {/* DERECHA - MENSAJE */}
      <div className="gallery-right">
        <h2>{data.contenido.titulo}</h2>
        <p>
          {data.contenido.descripcion}
        </p>
      </div>
    </div>
  );
}
