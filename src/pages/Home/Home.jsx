import Slider from "../../components/Slider/slider";
import About from "../../sections/about"
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <Slider />
      <About/>
    </section>
  );
}
