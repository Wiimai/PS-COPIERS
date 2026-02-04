import { useEffect, useRef, useState } from "react";
import "./zone.css";

export default function Zones() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`zones ${visible ? "zones--visible" : ""}`}
    >
      <div className="zones__inner">
        <div className="zones__content">
          <h2>Zona de cobertura</h2>
          <p>
            Brindamos atención técnica y operativa en los principales sectores
            del Área Metropolitana de Buenos Aires.
          </p>
        </div>

        <div className="zones__map">
          <img src="../../../public/amba-map.png" alt="Mapa AMBA" />
        </div>
      </div>
    </section>
  );
}
