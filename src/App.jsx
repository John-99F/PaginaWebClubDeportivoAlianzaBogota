import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Páginas públicas
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Login from "./pages/login.jsx";
// Dashboard / Admin
import Admin from "./pages/Admin.jsx";

// Componente de login simple (puedes personalizarlo)

// Simulación de autenticación
const isAuthenticated = () => {
  // Aquí podrías leer un token de localStorage o contexto de auth
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
        {/* Páginas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        {/* Dashboard protegido */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Ruta por defecto a home si no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;