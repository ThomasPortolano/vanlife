import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getVan } from "../../api";
import "../../Styles/Vans.css";
import "../../Styles/host.css";

export default function HostVanDetails() {
  const params = useParams();
  const [hostVansDetails, setHostVansDetails] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(params.id);
        setHostVansDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="host__van__details__backlink">
        <NavLink to=".." relative="path">
          &larr; <span>Back to all vans</span>
        </NavLink>
      </div>
      <div className="host__van__detail__fp">
        {hostVansDetails ? (
          <>
            <div className="host__van__detail__main__container">
              <div className="host__van__detail__snd__container">
                <img
                  className="host__van__detail__image"
                  src={hostVansDetails.imageUrl}
                />
                <div className="host__van__detail__third__container">
                  <div
                    className={`van__type van__type-${hostVansDetails.type}`}
                  >
                    {hostVansDetails.type}
                  </div>
                  <div className="host__van__detail__title">
                    {hostVansDetails.name}
                  </div>
                  <div className="host__van__detail__price">
                    <b>${hostVansDetails.price}</b>/day
                  </div>
                </div>
              </div>
              <div className="host__van_detail__navbar">
                <div className="host__van__detail__navbar__item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to=""
                    end
                  >
                    Details
                  </NavLink>
                </div>
                <div className="host__van__detail__navbar__item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="pricing"
                  >
                    Pricing
                  </NavLink>
                </div>
                <div className="host__van__detail__navbar__item">
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="photos"
                  >
                    Photos
                  </NavLink>
                  <p></p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Replace the loader by a state */
          <h2>Loading...</h2>
        )}
        <Outlet context={{ hostVansDetails }} />
      </div>
    </>
  );
}
