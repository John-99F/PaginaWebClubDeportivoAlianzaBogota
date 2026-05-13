import React from "react";
import {
  HashRouter as Router, // Restaurado a HashRouter
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Login from "./pages/Login/login.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Category from "./pages/Category/Category.jsx";

// Componentes Administrativos
import Admin from "./pages/Admin/Admin.jsx";
import AdminContent from "./pages/Admin/AdminContent.jsx";
import AdminImages from "./pages/Admin/AdminImages.jsx";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoria" element={<Category />} />

        {/* Rutas Administrativas Protegidas */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/admin/contenido"
          element={
            <ProtectedRoute>
              <AdminContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/imagenes"
          element={
            <ProtectedRoute>
              <AdminImages />
            </ProtectedRoute>
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;