import { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    image: "/Slide1.png",
    title: "Alquiler mensual de multifunciones sin preocupaciones",
    text: "Equipos Brother con servicio técnico e insumos incluidos. Nos ocupamos de todo para que tu oficina o negocio no se detenga.",
  },
  {
    image: "/Slide2.jpg",
    title: "Especialistas en multifunciones Brother",
    text: "Instalación, mantenimiento y soporte técnico para equipos de alto rendimiento.",
  },
  {
    image: "/Slide3.jpg",
    title: "Soporte rápido y atención personalizada",
    text: "Respondemos rápido, entendemos tu necesidad y te damos soluciones reales.",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      <div
        className="hero__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="hero__slide" key={index}>
            <img src={slide.image} alt="" />
            <div className="hero__overlay">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button>Contactanos</button>
            </div>
          </div>
        ))}
      </div>

      <button className="hero__arrow left" onClick={prevSlide}>‹</button>
      <button className="hero__arrow right" onClick={nextSlide}>›</button>

      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
