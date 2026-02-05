import "./footer.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BLOQUE MARCA */}
        <div className="footer__brand">
          <a href="/" class="logo">
            <img src="../../../public/logo-completo-ps-oscuro.svg" alt="PS Copiers"/>
          </a>
          <p>
            Soluciones profesionales de impresión con servicio técnico,
            insumos incluidos y atención personalizada.
          </p>
          <span className="footer__zone">
            Cobertura AMBA y Capital Federal
          </span>
        </div>

        {/* BLOQUE CONTACTO */}
        <div className="footer__contact">
          <h4>Contacto</h4>

          <div className="footer__item">
            <FaPhoneAlt />
            <span>+54 11 XXXX XXXX</span>
          </div>

          <div className="footer__item">
            <FaWhatsapp />
            <span>WhatsApp y llamadas directas</span>
          </div>

          <div className="footer__item">
            <FaEnvelope />
            <span>contacto@pscopiers.com</span>
          </div>

          <div className="footer__item">
            <FaMapMarkerAlt />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>

        {/* BLOQUE NAVEGACIÓN */}
        <div className="footer__nav">
          <h4>Secciones</h4>
          <a href="#about">Sobre nosotros</a>
          <a href="#process">Cómo trabajamos</a>
          <a href="#zones">Zonas de cobertura</a>
          <a href="#contact">Contactanos</a>
        </div>

        {/* CTA */}
        <div className="footer__cta">
          <p>¿Querés una propuesta a medida?</p>
          <button>Solicitar contacto</button>
        </div>

      </div>

      {/* BARRA LEGAL */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} PS Copiers · Todos los derechos reservados
      </div>
    </footer>
  );
}
