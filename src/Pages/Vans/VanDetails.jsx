import "../../Styles/Vans.css";
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVan } from "../../api";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = React.useState(null);
  const location = useLocation();
  const type = location.state?.type || "all";
  const search = location.state?.search || "";
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  console.log(location.state.type);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }

  return (
    <div className="van__detail__container">
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
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
