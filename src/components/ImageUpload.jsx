import { useState } from "react";
import { uploadImagen } from "../services/api";

export default function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Selecciona un archivo");
    await uploadImagen(file);
    alert("Imagen subida!");
    setFile(null);
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Subir Imagen
      </button>
    </div>
  );
}