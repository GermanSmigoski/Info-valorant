import React from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./carrousel.css";

const MapCarrousel = ({ maps }) => {
  return (
    <motion.div
      className="splide-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {maps && maps.length > 0 && (
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            height: '70vh',
            cover: true,
          }}
        >
          {maps.map((map, index) => (
            <SplideSlide key={map.id}>
              <motion.div
                className="slide-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={map.image} alt={`splash de ${map.name}`} />
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {map.name}
                </motion.h2>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </motion.div>
  );
};

export default MapCarrousel;
