import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../Styles/Vans.css";

export default function HostVanPricing() {
  const { hostVansDetails } = useOutletContext();
  return (
    <div className="host__vans__details--cat--info">
      <span className="host__vans__details--cat--title">Price: </span>$
      {hostVansDetails.price}/day
    </div>
  );
}
