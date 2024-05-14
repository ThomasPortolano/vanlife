import "../../Styles/Vans.css";
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);
  const location = useLocation();
  console.log(location.state.type);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van__detail__container">
      <Link
        to={
          location.state.search === null ? ".." : `..?${location.state.search}`
        }
        relative="path"
        className="back-button"
      >
        &larr;{" "}
        <span>
          Back to {location.state.type === null ? "all" : location.state.type}{" "}
          vans
        </span>
      </Link>
      {van ? (
        <>
          <img className="van__detail__image" src={van.imageUrl} />
          <div className={`van__detail__type van__type van__type-${van.type}`}>
            {van.type}
          </div>
          <div className="van__detail__title">{van.name}</div>
          <div className="van__detail__price">${van.price}/day</div>
          <div className="van__detail__description">{van.description}</div>
          <button className="van__detail__cta">Book now</button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
