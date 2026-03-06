import { useState, useEffect } from "react";
import "./GalleryPhoto.css";
import futbol1 from "../../assets/img/futbol1.jpg";
import futbol2 from "../../assets/img/futbol2.jpg";
import futbol3 from "../../assets/img/futbol3.jpg";

export default function GalleryPhoto() {
  const images = [futbol1, futbol2, futbol3];

  const [index, setIndex] = useState(0);

  // Movimiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <div className="gallery-photo-container">
        <img src={images[index]} alt="galeria" />
      </div>
    </div>
  );
}
