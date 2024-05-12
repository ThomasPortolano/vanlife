import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { hostVansDetails } = useOutletContext();
  return <h2>This is host van pricing</h2>;
}
