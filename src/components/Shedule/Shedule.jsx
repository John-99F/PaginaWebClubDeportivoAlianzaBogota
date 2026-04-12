import "./Schedule.css";
import dataInfo from "../../services/dataInfo";

export default function Schedule() {
  return (
    <section className="schedule">
      <h2 className="schedule-title">Nuestros horarios de entrenamiento</h2>

      <div className="schedule-table">
        <div className="schedule-header">
          <span>Días</span>
          <span>Horario</span>
        </div>

        {dataInfo.horarios.map((h, index) => (
          <div key={index} className="schedule-row">
            <span>{h.dias}</span>
            <span>{h.hora}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
