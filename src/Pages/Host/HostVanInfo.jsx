import React from "react";
import "../../Styles/Vans.css";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { hostVansDetails } = useOutletContext();
  return (
    <>
      <div className="host__vans__details--cat--info">
        <span className="host__vans__details--cat--title">Name: </span>
        {hostVansDetails.name}
      </div>
      <div className="host__vans__details--cat--info">
        <span className="host__vans__details--cat--title">Category: </span>
        {hostVansDetails.type}
      </div>
      <div className="host__vans__details--cat--info">
        <span className="host__vans__details--cat--title">Description: </span>
        {hostVansDetails.description}
      </div>
      <div className="host__vans__details--cat--info">
        <span className="host__vans__details--cat--title">Visibility: </span>
        Public
      </div>
    </>
  );
}
