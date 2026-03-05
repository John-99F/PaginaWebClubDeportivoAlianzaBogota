import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getImagenes } from "../services/api";
import "./Gallery.css";

export default function Gallery() {
  const [imagenes,setImagenes]=useState([]);
  useEffect(()=>{ getImagenes().then(res=>setImagenes(res)); }, []);
  return (
    <div className="gallery-page">
      <Header />
      <main className="gallery-main">
        {imagenes.map(img=>(
          <div key={img.id} className="gallery-item">
            <img src={img.imagen_url} alt={img.titulo}/>
            <p className="gallery-caption">{img.titulo}</p>
          </div>
        ))}
      </main>
      <Footer/>
    </div>
  );
}