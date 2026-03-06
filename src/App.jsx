import React from "react";
import {
  BrowserRouter as Router,
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
        <Route path="/contact" element={<Contact />} />
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
