import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [user,setUser]=useState("");
  const [pass,setPass]=useState("");
  const navigate=useNavigate();
  const handleLogin=()=>{
    if(user==="admin" && pass==="admin"){
      localStorage.setItem("token","token_simulado");
      navigate("/admin/contenido");
    }else alert("Credenciales incorrectas");
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input placeholder="Usuario" value={user} onChange={e=>setUser(e.target.value)}/>
        <input type="password" placeholder="Contraseña" value={pass} onChange={e=>setPass(e.target.value)}/>
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}