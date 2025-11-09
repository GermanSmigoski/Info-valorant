import React from "react";
import { motion } from "framer-motion";
import './allMaps.css'

const AllMaps = ({ maps }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="card-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {maps.map((map) => (
        <motion.div
          className="card"
          key={map.id}
          variants={itemVariants}
          whileHover={{ y: -15 }}
        >
          <div className="card-image">
            <img src={map.image} alt={`${map.name} image`} />
          </div>
          <div className="card-content">
            <h2>{map.name}</h2>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AllMaps;
