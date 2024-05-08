import "./Vans.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    const upperCaseType = van.type.charAt(0).toUpperCase() + van.type.slice(1);

    return (
      <div key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <img className="van__image" src={van.imageUrl} />
          <div className="van__details">
            <h2 className="van__name">{van.name}</h2>
            <div className="van__price">
              ${van.price}
              <br />
              /day
            </div>
          </div>
          <div className={`van__type van__type-${van.type}`}>
            {upperCaseType}
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="van__container">
      <div className="van__title">Explore our van options</div>
      <div className="van__list">{vanElements}</div>
    </div>
  );
}
