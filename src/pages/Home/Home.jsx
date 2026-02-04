import Slider from "../../components/Slider/slider";
import About from "../../sections/about"
import Process from "../../components/Process/process"
import Clients from "../../components/Clients/clients"
import Zone from "../../components/Zone/zone"
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <Slider />
      <About/>
      <Process/>
      <Clients/>
      <Zone/>
    </section>
  );
}
