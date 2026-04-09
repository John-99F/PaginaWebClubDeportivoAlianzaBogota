import "./Schedule.css";

export default function Schedule() {

  const horarios = [
    {
      dias: "Martes y Jueves",
      hora: "4:00 PM - 6:00 PM"
    },
    {
      dias: "Sabado y Domingo",
      hora: "7:30 AM - 10:00 AM"
    },
  ];

  return (
    <section className="schedule">

      <h2 className="schedule-title">Nuestros horarios de entrenamiento</h2>

      <div className="schedule-table">

        <div className="schedule-header">
          <span>Días</span>
          <span>Horario</span>
        </div>

        {horarios.map((h, index) => (
          <div key={index} className="schedule-row">
            <span>{h.dias}</span>
            <span>{h.hora}</span>
          </div>
        ))}

      </div>

    </section>
  );
}