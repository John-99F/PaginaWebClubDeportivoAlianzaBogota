import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Login from "./pages/Login/login.jsx";

import Admin from "./pages/Admin/Admin.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Category from "./pages/Category/Category.jsx";
import AdminContent from "./pages/Admin/AdminContent.jsx";
import AdminImages from "./pages/Admin/AdminImages.jsx";
import ProtectedRoute from "./ProtectedRoute";


const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

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
        <Route path="/category/:categoria" element={<Category />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contenido" element={<AdminContent />} />
        <Route path="/admin/imagenes" element={<AdminImages />} />
        <Route
          path="/admin/contenido"
          element={
            <ProtectedRoute>
              <AdminContent />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
