import equipo4 from "../../assets/img/Equipo4.jpg";
import equipo5 from "../../assets/img/Equipo5.jpg";
import equipo3 from "../../assets/img/Equipo3.jpg";
import heroImg from "../../assets/img/IMG_0192.jpg";

const GalleryData = {
    hero: {
  tituloGallery: "Conocenos",
  descripcionGallery: "Conoce los momentos destacados de nuestro Club ⚽",
    imagenHero: heroImg,
    },


  imagenes: [
    { id: 1, src: equipo4, titulo: "Entrenamiento en equipo" },
    { id: 2, src: equipo5, titulo: "Partido amistoso" },
    { id: 3, src: equipo3, titulo: "Celebración de victoria" },
  ],
};

export default GalleryData;
