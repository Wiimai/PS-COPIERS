import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
        <div className="contact__container">

            {/* HEADER DE SECCIÓN */}
            <div className="contact__intro">
            <h2>Contactanos</h2>
            <p>
                Analizamos tu necesidad de impresión y te proponemos un servicio
                mensual claro, estable y ajustado a tu uso real.
            </p>
            </div>

            {/* CONTENIDO */}
            <div className="contact__content">

            <div className="contact__info">
                <div className="contact__phone">
                <span>Teléfono / WhatsApp</span>
                <strong>+54 11 0000 0000</strong>
                <p>Recibimos llamadas y mensajes directos</p>
                </div>

                <ul className="contact__highlights">
                <li>Atención personalizada</li>
                <li>Respuesta rápida</li>
                <li>Servicio técnico e insumos incluidos</li>
                </ul>
            </div>

            <form className="contact__form">
                <h3>Solicitar propuesta</h3>

                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Empresa / Organización" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Teléfono" />
                <textarea rows="4" placeholder="Contanos brevemente tu necesidad" />

                <button type="submit">Enviar consulta</button>
            </form>

            </div>
        </div>
    </section>

  );
}
