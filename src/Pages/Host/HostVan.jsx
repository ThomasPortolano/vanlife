import React from "react";
import "../../Styles/host.css";

export default function HostVan() {
  const [hostVans, setHostVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  console.log(hostVans);

  const hostVanElements = hostVans.map((van) => {
    return (
      <div className="host__van__item" key={van.id}>
        <img className="host__van__image" src={van.imageUrl} />
        <div className="host__van__details">
          <div className="host__van__name">{van.name}</div>
          <div className="host__van__price">${van.price}/day</div>
        </div>
      </div>
    );
  });

  return (
    <div className="host__van__container">
      <div className="host__van__title">Your Vans</div>
      <div className="host__van__list">{hostVanElements}</div>
    </div>
  );
}