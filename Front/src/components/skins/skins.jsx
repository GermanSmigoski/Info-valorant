import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import "./skins.css";

export const Skins = () => {
  const { typeWeapon } = useParams();
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkin, setSelectedSkin] = useState(null);
  const url = "https://valorant-api.com/v1/weapons/skins";
  const tipoDeArma = typeWeapon;

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        const skins = response.data.data;
        const skinsFiltradas = filtrarSkinsPorArma(skins, tipoDeArma);
        setSkins(skinsFiltradas);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [typeWeapon]);

  function filtrarSkinsPorArma(skins, tipoArma) {
    const meleeKnife = [
      "Blade",
      "Claw",
      "Hammer",
      "Karambit",
      "Axe",
      "Dagger",
      "Sword",
      "Butterfly",
      "Melee",
      "Knife",
      "Neptune Anchor",
      "Araxys Bio Harvester",
      "Power Fist",
      "Wrath",
      "Waveform",
      "Obsidiana",
      "Onimaru Kunitsuna",
      "Cane",
      "Hu Else",
      "Mace",
      "Balisong",
      "Prosperity",
      "Wand",
      "Relic of the Sentinel",
      "Baton",
      "Luna's Descent",
      "Artisan Foil",
      "Drill",
    ];
    if (tipoArma === "Melee") {
      return skins.filter((skin) => {
        return meleeKnife.some((knife) => skin.displayName?.includes(knife));
      });
    } else {
      return skins.filter((skin) => {
        return skin.displayName?.toLowerCase().includes(tipoArma.toLowerCase());
      });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  if (loading) {
    return (
      <div className="closet-page">
        <LoadingSpinner message="Cargando colección..." />
      </div>
    );
  }

  return (
    <div className="closet-page">
      <Link to="/armas">
        <motion.img
          className="backArrow"
          src="/arrow.png"
          alt="arrowBack"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      <motion.div
        className="closet-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="closet-title">Colección de Skins</h1>
        <p className="closet-subtitle">{typeWeapon}</p>
      </motion.div>

      <motion.div
        className="closet-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Closet Shelves */}
        <div className="closet-shelves">
          {skins?.map((skin, index) => (
            <motion.div
              key={skin.uuid}
              className="closet-item"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedSkin(selectedSkin === skin.uuid ? null : skin.uuid)}
            >
              <div className="closet-hanger"></div>
              <div className="skin-display">
                <motion.img
                  src={
                    skin.chromas && skin.chromas[0]
                      ? skin.chromas[0]?.fullRender || skin.chromas[0]?.displayIcon
                      : skin.displayIcon || skin.displayName
                  }
                  alt={skin.displayName}
                  className="skin-image"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="skin-label">
                  <span className="skin-name">{skin.displayName}</span>
                </div>
              </div>
              <AnimatePresence>
                {selectedSkin === skin.uuid && (
                  <motion.div
                    className="skin-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="skin-info">
                      <p className="skin-description">
                        {skin.contentTierUuid && `Tier: ${skin.contentTierUuid}`}
                      </p>
                      {skin.chromas && skin.chromas.length > 1 && (
                        <p className="skin-variants">
                          {skin.chromas.length} variantes disponibles
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
