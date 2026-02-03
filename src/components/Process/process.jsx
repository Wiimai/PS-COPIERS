import "./Process.css";
import { useEffect, useRef, useState } from "react";
import {
  FaSearch,
  FaRegHandshake,
  FaTools,
  FaSyncAlt
} from "react-icons/fa";

export default function Process() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`process ${visible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="process__container">

        <div className="process__header">
          <h2>Cómo trabajamos</h2>
          <div className="process__title-accent">
            <span></span>
          </div>
        </div>

        <div className="process__timeline">

          <div className="process__step">
            <span className="process__number">01</span>
            <FaSearch className="process__icon" />
            <h3>Relevamiento inicial</h3>
            <p>
              Analizamos el volumen de impresión, el entorno de trabajo y las
              necesidades reales del cliente.
            </p>
          </div>

          <div className="process__step">
            <span className="process__number">02</span>
            <FaRegHandshake className="process__icon" />
            <h3>Propuesta personalizada</h3>
            <p>
              Definimos el valor del servicio según el uso real y la dinámica de
              cada organización.
            </p>
          </div>

          <div className="process__step">
            <span className="process__number">03</span>
            <FaTools className="process__icon" />
            <h3>Instalación y puesta en marcha</h3>
            <p>
              Instalamos y configuramos los equipos para que todo funcione desde
              el primer día.
            </p>
          </div>

          <div className="process__step">
            <span className="process__number">04</span>
            <FaSyncAlt className="process__icon" />
            <h3>Soporte y continuidad</h3>
            <p>
              Brindamos soporte técnico, insumos y seguimiento permanente para
              asegurar estabilidad operativa.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
