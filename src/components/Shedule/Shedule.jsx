import "./Schedule.css";
import SheduleInfo from "./SheduleInfo";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";
import { getCollection, getDocument } from "../../services/firestore";

export default function Schedule() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true); // empieza cargando

        const tabla = await getDocument("horario", "tabla_horarios");
        const titulos = await getDocument("horario", "titulos");
        setData({
          tabla,
          titulos,
        });
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false); // 👈 termina de cargar
      }
    };

    load();
  }, []);

  useEffect(() => {
    console.log("data actualizada:", data);
  }, [data]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <section className="schedule">
      <h2 className="schedule-title">{data.titulos.titulo}</h2>

      <div className="schedule-table">
        <div className="schedule-header">
          <span>{data.titulos.titulo_dia}</span>
          <span>{data.titulos.titulo}</span>
        </div>

        <div className="schedule-row">
          <span>{data.tabla.primer_horario.dias}</span>
          <span>{data.tabla.primer_horario.hora}</span>
        </div>
        <div className="schedule-row">
          <span>{data.tabla.segundo_horario.dias}</span>
          <span>{data.tabla.segundo_horario.hora}</span>
        </div>
      </div>
    </section>
  );
}
