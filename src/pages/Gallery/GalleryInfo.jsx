import equipo4 from "../../assets/img/Equipo4.jpg";
import equipo5 from "../../assets/img/Equipo5.jpg";
import equipo3 from "../../assets/img/Equipo3.jpg";
import equipo10 from "../../assets/img/Equipo10.jpeg";
import equipo11 from "../../assets/img/Equipo11.jpg";
import equipo12 from "../../assets/img/Equipo12.jpg";
import equipo13 from "../../assets/img/Equipo13.jpeg";
import equipo14 from "../../assets/img/Equipo14.jpeg";
import entrenamiento from "../../assets/img/entrenamiento.jpg";
import equipo15 from "../../assets/img/Equipo15.jpeg";
import heroImg from "../../assets/img/IMG_0192.jpg";

const GalleryData = {
  hero: {
    tituloGallery: "Conocenos",
    descripcionGallery: "Conoce los momentos destacados de nuestro Club ⚽",
    imagenHero: heroImg,
  },

  imagenes: [
    { id: 1, src: equipo11, titulo: "Entrenamiento en equipo" },
    { id: 2, src: equipo5, titulo: "Partido amistoso" },
    { id: 3, src: equipo10, titulo: "Partido" },
    { id: 4, src: equipo12, titulo: "Momentos previos" },
    { id: 5, src: equipo13, titulo: "Momentos previos" },
    { id: 6, src: equipo14, titulo: "Equipo" },
    { id: 7, src: entrenamiento, titulo: "Entrenamiento" },
    { id: 8, src: equipo15, titulo: "Despues del partido" },
  ],
};

export default GalleryData;
