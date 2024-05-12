import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import "../../Styles/Vans.css";
import "../../Styles/host.css";

export default function HostVanDetails() {
  const params = useParams();
  const [hostVansDetails, setHostVansDetails] = useState([]);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVansDetails(data.vans[0]));
  }, [params.id]);

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
