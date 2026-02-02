import { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  {
    image: "/Slide1.png",
    title: "Soluciones en impresión",
    text: "Alquiler, venta y servicio técnico de impresoras",
  },
  {
    image: "/Slide2.jpg",
    title: "Impresoras para empresas",
    text: "Equipos confiables para alto volumen de trabajo",
  },
  {
    image: "/Slide3.jpg",
    title: "Soporte técnico especializado",
    text: "Atención rápida y personalizada",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

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
