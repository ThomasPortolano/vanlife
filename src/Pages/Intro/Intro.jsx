import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro__container">
      <div className="intro__title">
        You got the travel plans, we got the travel vans.
      </div>
      <div className="intro__subtitle">
        Add adventure to your life by joinin the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </div>
      <button className="intro__cta">Find your van</button>
    </div>
  );
}
