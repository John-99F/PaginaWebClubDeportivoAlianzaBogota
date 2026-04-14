import { useEffect, useState } from "react";
import { getContenido, updateContenido } from "../../services/api";
import "./AdminContent.css";

export default function AdminContent() {
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    getContenido().then(setContenido);
  }, []);

  const handleChange = (e) => {
    setContenido({ ...contenido, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await updateContenido(contenido);
    alert("Guardado");
  };

return (
  <div className="admin-content">
    <h2>Editar Contenido</h2>

    <div className="admin-content-grid">
      {["vision", "mision", "historia", "valores"].map((campo) => (
        <div key={campo} className="admin-field">
          <label>{campo}</label>

          <textarea
            name={campo}
            value={contenido[campo] || ""}
            onChange={handleChange}
            className="text-area"
          />
        </div>
      ))}
    </div>

    <button className="admin-save-btn" onClick={handleSave}>
      Guardar Cambios
    </button>
  </div>
);
}