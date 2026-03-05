import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getContenido } from "../services/api";
import "./Home.css";

export default function Home() {
  const [contenido, setContenido] = useState({});
  useEffect(() => {
    getContenido().then((res) => setContenido(res));
  }, []);
  return (
    <div className="home-page">
      <Header />
      <div className="team-presentation">
          <h2>Somos mas que un club</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            mollitia delectus cum nesciunt culpa, officia unde veritatis
            architecto dolores minima pariatur quod tempore, odio et debitis
            dolorem! Temporibus, maxime?
          </p>
        </div>
      <main className="home-main">
        {["vision", "mision", "historia", "valores"].map((c) => (
          <section key={c} className="home-section">
            <h2>{c.charAt(0).toUpperCase() + c.slice(1)}</h2>
            <p>{contenido[c]}</p>
          </section>
        ))}
      </main>
         <div className="team-presentation">
          <h2>Inscripciones</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            mollitia delectus cum nesciunt culpa, officia unde veritatis
            architecto dolores minima pariatur quod tempore, odio et debitis
            dolorem! Temporibus, maxime?
          </p>
        </div>
      <Footer />
    </div>
  );
}
