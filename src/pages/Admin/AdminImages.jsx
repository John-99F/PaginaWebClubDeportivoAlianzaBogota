import { useState } from "react";
import "./AdminImages.css";

export default function AdminImages() {
  const [imagen, setImagen] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleUpload = (img) => {
    setImagen(img);

    // guardar en localStorage
    localStorage.setItem("imagen_admin", img);

    setSaved(true);
  };

  return (
    <div className="admin-images">

      <h2>Gestión de Imágenes</h2>

      <p className="admin-description">
        Sube una imagen arrastrándola o haciendo clic en el área
      </p>


      {saved && (
        <p className="upload-success">
          ✅ Imagen guardada correctamente
        </p>
      )}

      {imagen && (
        <div className="preview-container">
          <h3>Vista previa</h3>
          <img src={imagen} alt="preview" />
        </div>
      )}

    </div>
  );
}