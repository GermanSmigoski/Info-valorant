import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMaps } from "../../Redux/Actions/";
import "./Maps.css";
import AllMaps from "./allMaps.jsx";
import MapCarrousel from "./mapCarrousel.jsx";

export const Maps = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMaps());
  }, []);
  const maps = useSelector((state) => state.maps);
  return (
    <div>
      {maps.map((map) => {
        <div>
          <AllMaps
            id={map.id}
            name={map.name}
            image={map.image}
            icon={map.icon}
          />
          <MapCarrousel
            id={map.id}
            name={map.name}
            image={map.image}
            icon={map.icon}
          />
        </div>;
      })}
    </div>
  );
};
