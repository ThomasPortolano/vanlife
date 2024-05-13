import "../../Styles/Vans.css";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => {
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
      <div className="van__filters__container">
        <button
          className="van__filters"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="van__filters"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className="van__filters"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button className="van__clear" onClick={() => setSearchParams({})}>
          Clear filter
        </button>
      </div>

      <div className="van__list">{vanElements}</div>
    </div>
  );
}
