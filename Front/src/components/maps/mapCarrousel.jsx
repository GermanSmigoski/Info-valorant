import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./carrousel.css";
const MapCarrousel = ({ maps }) => {
  return (
    <div className="splide-container">
      {maps && maps.length > 0 && (
        <Splide>
          {maps.map((map) => (
            <SplideSlide key={map.id}>
              <img src={map.image} alt={`splash de ${map.name}`} />
              <h2>{map.name}</h2>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default MapCarrousel;
