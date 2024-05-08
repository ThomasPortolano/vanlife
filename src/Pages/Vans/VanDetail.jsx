import "./Vans.css";
import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState({});

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  //   const upperCaseType = van.type.charAt(0).toUpperCase() + van.type.slice(1);

  return (
    <div className="van__detail__container">
      <img className="van__detail__image" src={van.imageUrl} />
      <div className={`van__detail__type van__type van__type-${van.type}`}>
        {van.type}
      </div>
      <div className="van__detail__title">{van.name}</div>
      <div className="van__detail__price">${van.price}/day</div>
      <div className="van__detail__description">{van.description}</div>
      <button className="van__detail__cta">Book now</button>
    </div>
  );
}
