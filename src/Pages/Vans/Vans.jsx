import "../../Styles/Vans.css";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => {
    const upperCaseType = van.type.charAt(0).toUpperCase() + van.type.slice(1);

    return (
      <div key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1 aria-live="polite">Loading...</h1>;
  }

  if (error) {
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  }

  return (
    <div className="van__container">
      <div className="van__title">Explore our van options</div>
      <div className="van__filters__container">
        <button
          className="van__filters"
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className="van__filters"
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className="van__filters"
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            className="van__clear"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filter
          </button>
        ) : null}
      </div>

      <div className="van__list">{vanElements}</div>
    </div>
  );
}
