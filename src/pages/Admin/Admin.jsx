import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getContenido, updateContenido } from "../../services/api";
import "./Admin.css";

export default function Admin() {
  const [contenido, setContenido] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getContenido().then((res) => {
      setContenido(res);
      setLoading(false);
    });
  }, []);
  const handleChange = (e) =>
    setContenido({ ...contenido, [e.target.name]: e.target.value });
  const handleSave = async () => {
    await updateContenido(contenido);
    alert("Contenido actualizado!");
  };
  if (loading) return <p className="admin-loading">Cargando...</p>;
  return (
    <div className="admin-page">
      <Header />
      <main className="admin-main">
        <h1>Dashboard</h1>
        {["vision", "mision", "historia", "valores"].map((campo) => (
          <div key={campo} className="admin-field">
            <label>{campo}</label>
            <textarea
              name={campo}
              value={contenido[campo]}
              onChange={handleChange}
              rows={3}
            />
          </div>
        ))}
        <button onClick={handleSave}>Guardar Cambios</button>
      </main>
      <Footer />
    </div>
  );
}
