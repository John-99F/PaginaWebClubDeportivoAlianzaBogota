import { useEffect, useState } from "react";
import {
  getCollection,
  getDocument,
  updateDocById,
  uploadFile,
} from "../../services/firestore";
import { useNavigate } from "react-router-dom";

import "./AdminContent.css";

const MODULOS = {
  inicio: { type: "collection", collection: "home" },
  contenido: { type: "collection", collection: "contenido" },
  categorias: { type: "collection", collection: "categorias" },
  conocemos: { type: "collection", collection: "galeria" },
  botones: { type: "collection", collection: "boton" },
  portada: { type: "collection", collection: "hero" },
  horarios: { type: "collection", collection: "horario" },
};

export default function AdminContent() {
  const [moduloActivo, setModuloActivo] = useState("inicio");
  const [contenido, setContenido] = useState([]);
  const [abiertos, setAbiertos] = useState({});
  const [cargandoImagen, setCargandoImagen] = useState(false);
    const navigate=useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      const config = MODULOS[moduloActivo];
      let data = await (config.type === "collection"
        ? getCollection(config.collection)
        : getDocument(config.collection, config.doc));

      setContenido(
        config.type === "doc" ? [{ id: config.doc, ...data }] : data || [],
      );
    };
    fetchData();
  }, [moduloActivo]);

  const toggleSeccion = (id) => {
    setAbiertos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChangeDoc = (docId, key, value) => {
    const updated = contenido.map((item) =>
      item.id === docId ? { ...item, [key]: value } : item,
    );
    setContenido(updated);
  };

  // --- Nueva función para manejar la subida de imágenes ---
  const handleImageUpload = async (
    docId,
    key,
    file,
    isArray = false,
    index = null,
  ) => {
    if (!file) return;
    try {
      setCargandoImagen(true);
      const url = await uploadFile(file); // Sube a Storage y obtiene URL

      if (isArray) {
        const updatedDoc = contenido.find((item) => item.id === docId);
        const updatedArray = [...updatedDoc[key]];
        updatedArray[index] = {
          ...updatedArray[index],
          [Object.keys(updatedArray[index])[0]]: url,
        }; // Ajustar según estructura
        handleChangeDoc(docId, key, updatedArray);
      } else {
        handleChangeDoc(docId, key, url);
      }
      alert("Imagen subida con éxito");
    } catch (error) {
      console.error(error);
      alert("Error al subir imagen");
    } finally {
      setCargandoImagen(false);
    }
  };

  const renderDocumento = (docItem) => {
    const abierto = abiertos[docItem.id];

    return (
      <div key={docItem.id} className="admin-section">
        <div
          className="admin-section-header"
          onClick={() => toggleSeccion(docItem.id)}
        >
          <h4>{docItem.id}</h4>
          <span>{abierto ? "−" : "+"}</span>
        </div>

        {abierto && (
          <div className="admin-section-body">
            {Object.entries(docItem).map(([key, value]) => {
              if (key === "id") return null;

              // Lógica para detectar si es campo de imagen
              const isImageField =
                key.toLowerCase().includes("img") ||
                key.toLowerCase().includes("foto") ||
                key.toLowerCase().includes("url") ||
                key.toLowerCase().includes("imagen") ||
                key.toLowerCase().includes("fondo");

              return (
                <div key={key} className="admin-field">
                  <label>{key}</label>

                  {/* 🔸 INPUT DE IMAGEN (Si detecta palabras clave) */}
                  {isImageField && typeof value === "string" && (
                    <div className="image-upload-container">
                      {value && (
                        <img
                          src={value}
                          alt="Preview"
                          className="admin-preview-img"
                        />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(docItem.id, key, e.target.files[0])
                        }
                      />
                      {cargandoImagen && <small>Subiendo...</small>}
                    </div>
                  )}

                  {/* 🔸 TEXTAREA (Solo si NO es imagen) */}
                  {typeof value === "string" && !isImageField && (
                    <textarea
                      value={value}
                      onChange={(e) =>
                        handleChangeDoc(docItem.id, key, e.target.value)
                      }
                    />
                  )}

                  {/* 🔸 OBJETO */}
                  {typeof value === "object" &&
                    !Array.isArray(value) &&
                    Object.entries(value).map(([subKey, subValue]) => (
                      <div key={subKey} className="admin-field-sub">
                        <label>{subKey}</label>
                        <textarea
                          value={subValue}
                          onChange={(e) => {
                            const updated = contenido.map((item) =>
                              item.id === docItem.id
                                ? {
                                    ...item,
                                    [key]: {
                                      ...item[key],
                                      [subKey]: e.target.value,
                                    },
                                  }
                                : item,
                            );
                            setContenido(updated);
                          }}
                        />
                      </div>
                    ))}

                  {/* 🔸 ARRAY (Ej: Galería de fotos) */}
                  {Array.isArray(value) && (
                    <div className="admin-array">
                      {value.map((item, index) => (
                        <div key={index} className="admin-array-item">
                          {Object.keys(item).map((field) => (
                            <div key={field}>
                              {field.includes("img") ||
                              field.includes("url") ? (
                                <input
                                  type="file"
                                  onChange={(e) =>
                                    handleImageUpload(
                                      docItem.id,
                                      key,
                                      e.target.files[0],
                                      true,
                                      index,
                                    )
                                  }
                                />
                              ) : (
                                <input
                                  value={item[field]}
                                  onChange={(e) => {
                                    const updated = [...value];
                                    updated[index][field] = e.target.value;
                                    handleChangeDoc(docItem.id, key, updated);
                                  }}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <button
              className="btn-save"
              onClick={async () => {
                const config = MODULOS[moduloActivo];
                try {
                  await updateDocById(config.collection, docItem.id, docItem);
                  alert("✅ Documento actualizado");
                } catch (error) {
                  alert("❌ Error guardando");
                }
              }}
            >
              Guardar Cambios
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="admin-content">
      <h2>Administrador del Sitio</h2>
      <div className="admin-layout">
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
          <button className="btn-logout" onClick={handleLogout}>
            CERRAR SESIÓN
          </button>
        </aside>
        <div className="admin-editor">
          <h3>{moduloActivo.toUpperCase()}</h3>
          <div className="admin-fields">
            {contenido.map((docItem) => renderDocumento(docItem))}
          </div>
        </div>
      </div>
    </div>
  );
}
