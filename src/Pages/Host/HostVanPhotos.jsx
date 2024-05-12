import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { hostVansDetails } = useOutletContext();
  return <h2>This is host van photos</h2>;
}
