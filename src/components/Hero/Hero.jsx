import "./Hero.css";

export default function Hero({ title, subtitle, image }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 140, 0, 0.2), rgba(255, 140, 0, 0.5)), url(${image})`,
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
