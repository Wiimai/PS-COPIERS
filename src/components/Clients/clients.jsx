import {
  FaBuilding,
  FaBook,
  FaHospital,
  FaUserTie
} from "react-icons/fa";
import "./Clients.css";

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__container">

        <div className="clients__header">
          <h2>¿Con quiénes trabajamos?</h2>
          <p>
            Brindamos soluciones de impresión a organizaciones que requieren
            continuidad operativa, orden y respuesta inmediata.
          </p>
        </div>

        <div className="clients__grid">

          <div className="clients__card">
            <FaBuilding className="clients__icon" />
            <h3>Empresas y oficinas</h3>
            <p>Corporaciones, pymes y espacios administrativos</p>
          </div>

          <div className="clients__card">
            <FaBook className="clients__icon" />
            <h3>Librerías y educación</h3>
            <p>Librerías comerciales, centros educativos y copisterías</p>
          </div>

          <div className="clients__card">
            <FaHospital className="clients__icon" />
            <h3>Salud</h3>
            <p>Hospitales, clínicas y laboratorios</p>
          </div>

          <div className="clients__card">
            <FaUserTie className="clients__icon" />
            <h3>Profesionales y comercios</h3>
            <p>Estudios profesionales y negocios de cercanía</p>
          </div>

        </div>

      </div>
    </section>
  );
}
