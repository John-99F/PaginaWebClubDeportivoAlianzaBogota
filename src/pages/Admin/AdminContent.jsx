import { useEffect, useState } from "react";
import homeData from "../Home/HomeInfo";
import AboutData from "../About/AboutInfo";
import categoryData from "../Category/CategoryInfo";
import GalleryData from "../Gallery/GalleryInfo";
import contactInfo from "../Contact/ContactInfo";
import SheduleInfo from "../../components/Shedule/SheduleInfo";
// luego puedes importar más:
// import nosotrosData from "...";
// import galeriaData from "...";

import "./AdminContent.css";
import FooterInfo from "../../components/Footer/FooterInfo";

const MODULOS = {
  inicio: homeData,
  nosotros: AboutData,
  categorias: categoryData,
  conocemos: GalleryData,
  contacto: contactInfo,
  PieDePagina: FooterInfo,
  horarios: SheduleInfo,
};

export default function AdminContent() {
  const [moduloActivo, setModuloActivo] = useState("inicio");
  const [contenido, setContenido] = useState({});
  const [abiertos, setAbiertos] = useState({});

  useEffect(() => {
    setContenido(MODULOS[moduloActivo]);
  }, [moduloActivo]);

  // 🔹 Cambios simples
  const handleChange = (key, value) => {
    setContenido((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // 🔹 Cambios en arrays
  const handleArrayChange = (key, index, field, value) => {
    const updated = [...contenido[key]];
    updated[index][field] = value;

    setContenido((prev) => ({
      ...prev,
      [key]: updated,
    }));
  };

  const toggleSeccion = (key) => {
  setAbiertos((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};
  // 🔹 Render dinámico
const renderField = (key, value) => {
  const abierto = abiertos[key];

  return (
    <div key={key} className="admin-section">
      <div
        className="admin-section-header"
        onClick={() => toggleSeccion(key)}
      >
        <h4>{key}</h4>
        <span>{abierto ? "−" : "+"}</span>
      </div>

      {abierto && (
        <div className="admin-section-body">

          {/* 🔸 OBJETO */}
          {typeof value === "object" && !Array.isArray(value) && (
            Object.entries(value).map(([subKey, subValue]) => (
              <div key={subKey} className="admin-field">
                <label>{subKey}</label>
                <textarea
                  value={subValue || ""}
                  onChange={(e) => {
                    setContenido((prev) => ({
                      ...prev,
                      [key]: {
                        ...prev[key],
                        [subKey]: e.target.value,
                      },
                    }));
                  }}
                />
              </div>
            ))
          )}

          {/* 🔸 ARRAY */}
          {Array.isArray(value) && (
            <div className="admin-array">
              {value.map((item, index) => (
                <div key={index} className="admin-array-item">
                  {Object.keys(item).map((field) => (
                    <input
                      key={field}
                      value={item[field]}
                      placeholder={field}
                      onChange={(e) =>
                        handleArrayChange(key, index, field, e.target.value)
                      }
                    />
                  ))}
                </div>
              ))}

              <button
                onClick={() => {
                  const nuevo = Object.fromEntries(
                    Object.keys(value[0] || {}).map((k) => [k, ""])
                  );

                  handleChange(key, [...value, nuevo]);
                }}
              >
                + Agregar
              </button>
            </div>
          )}

          {/* 🔸 STRING */}
          {typeof value === "string" && (
            <textarea
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          )}

        </div>
      )}
    </div>
  );
};

  return (
    <div className="admin-content">
      <h2>Administrador del Sitio</h2>

      <div className="admin-layout">
        {/* 🔹 SIDEBAR */}
        <aside className="admin-sidebar">
          {Object.keys(MODULOS).map((mod) => (
            <button
              key={mod}
              className={moduloActivo === mod ? "active" : ""}
              onClick={() => setModuloActivo(mod)}
            >
              {mod.toUpperCase()}
            </button>
          ))}
        </aside>

        <div className="admin-editor">
          <h3>{moduloActivo.toUpperCase()}</h3>

          <div className="admin-fields">
            {Object.entries(contenido).map(([key, value]) =>
              renderField(key, value)
            )}
          </div>

          <button
            onClick={() => {
              console.log(`Guardar ${moduloActivo}:`, contenido);
              alert("Revisa consola (simulación)");
            }}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}