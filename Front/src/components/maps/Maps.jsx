import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMaps } from "../../Redux/Actions/";
import "./Maps.css";
import AllMaps from "./allMaps.jsx";
import MapCarrousel from "./mapCarrousel.jsx";

export const Maps = () => {
  const [isActivate, setIsActivate] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMaps());
  }, []);
  const maps = useSelector((state) => state.maps);

  return (
    <div className="maps-container">
      <div className="maps-buttons">
        <button onClick={() => setIsActivate(true)}>Todas</button>
        <button onClick={() => setIsActivate(false)}>Una</button>
      </div>
      {isActivate && isActivate ? (
        <AllMaps maps={maps} />
      ) : (
        <MapCarrousel maps={maps} />
      )}
    </div>
  );
};
