import React from "react";
import {
  HashRouter as Router, // 👈 CAMBIO CLAVE
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Páginas públicas
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Login from "./pages/Login/login.jsx";

// Dashboard / Admin
import Admin from "./pages/Admin/Admin.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Category from "./pages/Category/Category.jsx";
import AdminContent from "./pages/Admin/AdminContent.jsx";
import AdminImages from "./pages/Admin/AdminImages.jsx";
// Componente de login simple (puedes personalizarlo)

// Simulación de autenticación
const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

// Protege la ruta del admin
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contenido" element={<AdminContent />} />
        <Route path="/admin/imagenes" element={<AdminImages />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

    
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;