import "./About.css";
import { Printer, Wrench, Users } from "lucide-react";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">

        {/* Header impactante */}
        <div className="about__hero">
          <div className="about__years">
            <span>+30</span>
            <small>años de experiencia</small>
          </div>

          <h2>
            Soluciones de impresión que acompañan
            <br /> el ritmo de tu organización
          </h2>
        </div>

        {/* Cards */}
        <div className="about__cards">

          <div className="about__card">
            <Printer size={36} />
            <h3>Equipos profesionales</h3>
            <p>
              Fotocopiadoras e impresoras multifunción color y blanco y negro,
              seleccionadas según el volumen real de trabajo.
            </p>
          </div>

          <div className="about__card">
            <Wrench size={36} />
            <h3>Servicio incluido</h3>
            <p>
              Alquiler con soporte técnico, mantenimiento e insumos incluidos,
              para que no tengas interrupciones.
            </p>
          </div>

          <div className="about__card">
            <Users size={36} />
            <h3>Atención personalizada</h3>
            <p>
              Trabajamos con empresas, comercios, librerías, hospitales e
              instituciones con respuestas rápidas y trato directo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
