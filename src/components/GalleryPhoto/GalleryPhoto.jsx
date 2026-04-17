import { useState, useEffect } from "react";
import "./GalleryPhoto.css";
import futbol1 from "../../assets/img/futbol1.jpg";
import futbol2 from "../../assets/img/futbol2.jpg";
import futbol3 from "../../assets/img/Futbol3.jpg";

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
        <h2>Formación Integral</h2>
        <p>
          Nos dedicamos a construir una generación de futbolistas íntegros, con pasión por el juego y el deseo de dejar huella dentro y fuera de la cancha.
        </p>
      </div>

    </div>
  );
}