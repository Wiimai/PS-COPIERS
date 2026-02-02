import { useState } from "react";
import "./Slider.css";

const slides = [
  {
    image: "public/Slide1.png",
    title: "Soluciones en impresión",
    text: "Alquiler, venta y servicio técnico de impresoras",
  },
  {
    image: "public/Slide2.jpg",
    title: "Impresoras para empresas",
    text: "Equipos confiables para alto volumen de trabajo",
  },
  {
    image: "public/Slide3.jpg",
    title: "Soporte técnico especializado",
    text: "Atención rápida y personalizada",
  },
];

export default function Slider() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">
    <img
        src={slides[current].image}
        alt=""
        className="hero__image"
    />
      <div className="hero__overlay">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].text}</p>
        <button>Contactanos</button>
      </div>

      <button className="hero__arrow left" onClick={prevSlide}>
        ‹
      </button>
      <button className="hero__arrow right" onClick={nextSlide}>
        ›
      </button>
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
