import "./About.css";
import Kv from "./about-kv.jpg";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__kv">
        <img src={Kv} alt="green van parked on the beach"></img>
      </div>
      <div className="about__title">
        Don't squeeze in a sedan when you could relax in a van.
      </div>
      <div className="about__body">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉).
      </div>
      <div className="about__body">
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </div>
      <div className="about__cta__container">
        <div className="about__cta__title">
          Your destination is waiting. <br />
          Your van is ready.
        </div>
        <button className="about__cta">Explore our vans</button>
      </div>
    </div>
  );
}
