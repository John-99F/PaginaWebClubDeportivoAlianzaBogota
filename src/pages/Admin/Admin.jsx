import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">

      <Header />

      <main className="admin-main">

        <h1>Panel de Administración</h1>

        <div className="admin-menu">

          <div onClick={() => navigate("/admin/contenido")} className="admin-option">
            📄 Gestionar Contenido
          </div>

          <div onClick={() => navigate("/admin/imagenes")} className="admin-option">
            🖼️ Gestionar Imágenes
          </div>

          <div onClick={() => navigate("/admin/galeria")} className="admin-option">
            📸 Galería
          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}