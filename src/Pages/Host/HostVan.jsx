import React from "react";
import "../../Styles/host.css";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

export default function HostVan() {
  const [hostVans, setHostVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setHostVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const hostVanElements = hostVans.map((van) => {
    return (
      <div key={van.id}>
        <Link to={van.id}>
          <div className="host__van__item">
            <img className="host__van__image" src={van.imageUrl} />
            <div className="host__van__details">
              <div className="host__van__name">{van.name}</div>
              <div className="host__van__price">${van.price}/day</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <div className="host__van__container">
      <div className="host__van__title">Your Vans</div>
      <div className="host__van__list">
        {hostVans.length > 0 ? (
          <div>{hostVanElements}</div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
