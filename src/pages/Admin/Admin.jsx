import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();

  const opciones = [
    {
      ruta: "/admin/contenido",
      icono: "📄",
      texto: "Gestionar Contenido",
    },
    {
      ruta: "/admin/imagenes",
      icono: "🖼️",
      texto: "Gestionar Imágenes",
    },
    {
      ruta: "/admin/galeria",
      icono: "📸",
      texto: "Galería",
    },
  ];

  return (
    <div className="admin-page">
      <Header />

      <main className="admin-main">
        <h1>Panel de Administración</h1>

        <div className="admin-menu">
          {opciones.map((op, index) => (
            <button
              key={index}
              className="admin-option"
              onClick={() => navigate(op.ruta)}
            >
              <span className="admin-icon">{op.icono}</span>
              <span>{op.texto}</span>
            </button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}