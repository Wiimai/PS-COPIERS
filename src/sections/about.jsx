import "./About.css";
import {
  FaPrint,
  FaDollarSign,
  FaBolt,
  FaHospital
} from "react-icons/fa";



export default function About() {
  return (
    <section className="about">
      <div className="about__container">

        {/* TEXTO PRINCIPAL */}
        <div className="about__intro">
          <h2>Más que equipos, ofrecemos continuidad</h2>
          <p>
            En <strong>PS Copiers</strong> alquilamos impresoras y multifunciones con
            servicio técnico e insumos incluidos, ajustando el valor del servicio
            según el uso real de cada cliente.
          </p>
        </div>

        {/* BLOQUE +30 */}
        <div className="about__experience">
          <span className="about__years">+30 AÑOS</span>
          <p>Brindando servicios de impresión estables y personalizados</p>
        </div>

        {/* CHIPS INFORMATIVOS */}
        <div className="about__features">
            <div className="about__feature">
                <FaPrint className="about__icon" />
                <h4>Servicio completo</h4>
                <p>Equipos, insumos y soporte técnico incluidos</p>
            </div>

            <div className="about__feature">
                <FaDollarSign className="about__icon" />
                <h4>Valor personalizado</h4>
                <p>Pagás según el volumen real de impresión</p>
            </div>

            <div className="about__feature">
                <FaBolt className="about__icon" />
                <h4>Respuesta rápida</h4>
                <p>Atención directa y sin intermediarios</p>
            </div>

            <div className="about__feature">
                <FaHospital className="about__icon" />
                <h4>Experiencia aplicada</h4>
                <p>Empresas, librerías, hospitales y más</p>
            </div>
        </div>


        {/* CIERRE */}
        <div className="about__closing">
          <span className="about__line"></span>
          <p>
            Cada cliente trabaja distinto.  
            <strong> Su servicio de impresión también debería hacerlo.</strong>
          </p>
        </div>

      </div>
    </section>
  );
}
