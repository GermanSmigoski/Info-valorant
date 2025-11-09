import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { getAllMaps } from "../../Redux/Actions/";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import "./Maps.css";
import AllMaps from "./allMaps.jsx";
import MapCarrousel from "./mapCarrousel.jsx";

export const Maps = () => {
  const [isActivate, setIsActivate] = useState(false);
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps);
  const loading = useSelector((state) => state.loading?.maps || false);

  useEffect(() => {
    dispatch(getAllMaps());
  }, [dispatch]);

  return (
    <div className="maps-container">
      <motion.div
        className="maps-buttons"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsActivate(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: isActivate ? 'rgba(255, 70, 85, 0.3)' : 'transparent',
            color: isActivate ? '#ffffff' : '#ff4655',
          }}
        >
          Todas
        </motion.button>
        <motion.button
          onClick={() => setIsActivate(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: !isActivate ? 'rgba(255, 70, 85, 0.3)' : 'transparent',
            color: !isActivate ? '#ffffff' : '#ff4655',
          }}
        >
          Una
        </motion.button>
      </motion.div>
      
      {loading ? (
        <LoadingSpinner message="Cargando mapas..." />
      ) : (
        <AnimatePresence mode="wait">
          {isActivate ? (
            <motion.div
              key="all-maps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AllMaps maps={maps} />
            </motion.div>
          ) : (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <MapCarrousel maps={maps} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
