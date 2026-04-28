import { useEffect, useState } from "react";
import {
  getCollection,
  getDocument,
  updateDocById
} from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

import "./AdminContent.css";

const MODULOS = {
  inicio: { type: "collection", collection: "home" },
  contenido: { type: "collection", collection: "contenido" },
  categorias: { type: "collection", collection: "categorias" },
  botones: { type: "collection", collection: "boton" },
  portada: { type: "collection", collection: "hero" },
  "Pie de pagina": { type: "collection", collection: "footer" },
  horarios: { type: "collection", collection: "horario" },
};

export default function AdminContent() {
  const [moduloActivo, setModuloActivo] = useState("inicio");
  const [contenido, setContenido] = useState([]);
  const [abiertos, setAbiertos] = useState({});
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      const config = MODULOS[moduloActivo];

      let data = await (config.type === "collection"
        ? getCollection(config.collection)
        : getDocument(config.collection, config.doc));

      setContenido(
        config.type === "doc"
          ? [{ id: config.doc, ...data }]
          : data || []
      );
    };

    fetchData();
  }, [moduloActivo]);

  const toggleSeccion = (id) => {
    setAbiertos((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChangeDoc = (docId, key, value) => {
    const updated = contenido.map((item) =>
      item.id === docId ? { ...item, [key]: value } : item
    );
    setContenido(updated);
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

              return (
                <div key={key} className="admin-field">
                  <label>{key}</label>

                  {/* 🔵 STRING */}
                  {typeof value === "string" && (
                    <textarea
                      value={value}
                      onChange={(e) =>
                        handleChangeDoc(docItem.id, key, e.target.value)
                      }
                    />
                  )}

                  {/* 🔵 OBJETO */}
                  {typeof value === "object" &&
                    !Array.isArray(value) &&
                    value !== null &&
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
                                : item
                            );
                            setContenido(updated);
                          }}
                        />
                      </div>
                    ))}

                  {/* 🔵 ARRAY */}
                  {Array.isArray(value) && (
                    <div className="admin-array">
                      {value.map((item, index) => (
                        <div key={index} className="admin-array-item">

                          {/* ARRAY DE STRINGS */}
                          {typeof item === "string" && (
                            <input
                              value={item}
                              onChange={(e) => {
                                const updated = [...value];
                                updated[index] = e.target.value;
                                handleChangeDoc(docItem.id, key, updated);
                              }}
                            />
                          )}

                          {/* ARRAY DE OBJETOS */}
                          {typeof item === "object" && item !== null && (
                            Object.keys(item).map((field) => (
                              <input
                                key={field}
                                value={item[field]}
                                onChange={(e) => {
                                  const updated = [...value];
                                  updated[index][field] = e.target.value;
                                  handleChangeDoc(docItem.id, key, updated);
                                }}
                              />
                            ))
                          )}

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
                  await updateDocById(
                    config.collection,
                    docItem.id,
                    docItem
                  );
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