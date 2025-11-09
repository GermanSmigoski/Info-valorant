import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="landing-page">
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="landingInfo"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>¡Bienvenido a Valorant!</motion.h1>
          <motion.p variants={itemVariants}>
            Descubre los personajes, mapas y armas más impresionantes del juego.
          </motion.p>
        </motion.div>
      </motion.section>
      <section className="features">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Características
        </motion.h2>
        <motion.div
          className="feature-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants} whileHover="hover">
            <Link to="/personajes">
              <h3>Personajes</h3>
            </Link>
            <p>
              Conoce a los personajes más interesantes de Valorant y sus
              habilidades únicas.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} whileHover="hover">
            <Link to="/mapas">
              <h3>Mapas</h3>
            </Link>
            <p>
              Explora los mapas más fascinantes de Valorant y aprende a
              dominarlos.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} whileHover="hover">
            <Link to="/armas">
              <h3>Armas</h3>
            </Link>
            <p>
              Descubre las armas más poderosas de Valorant y aprende a
              utilizarlas.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
