import Slider from "../../components/Slider/slider";
import About from "../../sections/about"
import Process from "../../components/Process/process"
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <Slider />
      <About/>
      <Process/>
    </section>
  );
}
