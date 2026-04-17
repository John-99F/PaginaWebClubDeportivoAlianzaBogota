import "./Schedule.css";
import SheduleInfo from "./SheduleInfo";

export default function Schedule() {
  return (
    <section className="schedule">
      <h2 className="schedule-title">{SheduleInfo.titulo}</h2>

      <div className="schedule-table">
        <div className="schedule-header">
          <span>{SheduleInfo.tituloDia}</span>
          <span>{SheduleInfo.tituloHora}</span>
        </div>

        {SheduleInfo.horarios.map((h, index) => (
          <div key={index} className="schedule-row">
            <span>{h.dias}</span>
            <span>{h.hora}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
