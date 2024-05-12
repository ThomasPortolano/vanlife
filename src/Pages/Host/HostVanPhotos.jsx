import React from "react";
import { useOutletContext } from "react-router-dom";
import "../../Styles/Vans.css";

export default function HostVanPhotos() {
  const { hostVansDetails } = useOutletContext();
  return <img className="host__van__image" src={hostVansDetails.imageUrl} />;
}
