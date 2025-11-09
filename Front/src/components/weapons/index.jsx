import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getWeapons } from "../../Redux/Actions";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import "./weapons.css";

export const Weapons = () => {
  const weapons = useSelector((state) => state.weapons);
  const loading = useSelector((state) => state.loading?.weapons || false);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    dispatch(getWeapons());
  }, [dispatch]);

  // Organizar armas por categoría
  const organizedWeapons = useMemo(() => {
    if (!weapons || weapons.length === 0) return {};
    
    const sorted = [...weapons].sort((a, b) => {
      if (a.category !== b.category) {
        const categoryOrder = {
          'Sidearms': 1,
          'SMGs': 2,
          'Shotguns': 3,
          'Rifles': 4,
          'Sniper Rifles': 5,
          'Heavy': 6,
          'Melee': 7,
        };
        return (categoryOrder[a.category] || 99) - (categoryOrder[b.category] || 99);
      }
      return a.name.localeCompare(b.name);
    });

    const grouped = sorted.reduce((acc, weapon) => {
      const category = weapon.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(weapon);
      return acc;
    }, {});

    return grouped;
  }, [weapons]);

  const categories = Object.keys(organizedWeapons);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  if (loading) {
    return (
      <div className="weapons-page">
        <LoadingSpinner message="Cargando armas..." />
      </div>
    );
  }

  return (
    <div className="weapons-page">
      <Link to="/">
        <motion.img
          className="backArrow"
          src="/arrow.png"
          alt="arrowBack"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      {/* Category Filter Tabs */}
      <motion.div 
        className="category-tabs"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className={`category-tab ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Todas
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Weapons Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory || 'all'}
          className="weapons-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {selectedCategory ? (
            // Show single category
            <motion.div
              className="weapons-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {organizedWeapons[selectedCategory]?.map((weapon) => (
                <motion.div
                  key={weapon.id}
                  className="weapon-card"
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={`/${weapon.name}/skins`} className="weapon-link">
                    <div className="weapon-image-wrapper">
                      <img src={weapon.image} alt={weapon.name} className="weapon-image" />
                      <div className="weapon-glow"></div>
                    </div>
                    <div className="weapon-content">
                      <h3 className="weapon-title">{weapon.name}</h3>
                      <div className="weapon-details">
                        {weapon.cost > 0 && (
                          <div className="weapon-detail">
                            <span className="detail-icon">💰</span>
                            <span className="detail-value">{weapon.cost}</span>
                          </div>
                        )}
                        {weapon.fireRate && (
                          <div className="weapon-detail">
                            <span className="detail-icon">⚡</span>
                            <span className="detail-value">{weapon.fireRate} rpm</span>
                          </div>
                        )}
                        {weapon.magazineSize && (
                          <div className="weapon-detail">
                            <span className="detail-icon">📦</span>
                            <span className="detail-value">{weapon.magazineSize}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Show all weapons together without grouping
            <motion.div
              className="weapons-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {weapons?.map((weapon) => (
                <motion.div
                  key={weapon.id}
                  className="weapon-card"
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={`/${weapon.name}/skins`} className="weapon-link">
                    <div className="weapon-image-wrapper">
                      <img src={weapon.image} alt={weapon.name} className="weapon-image" />
                      <div className="weapon-glow"></div>
                    </div>
                    <div className="weapon-content">
                      <h3 className="weapon-title">{weapon.name}</h3>
                      <div className="weapon-details">
                        {weapon.cost > 0 && (
                          <div className="weapon-detail">
                            <span className="detail-icon">💰</span>
                            <span className="detail-value">{weapon.cost}</span>
                          </div>
                        )}
                        {weapon.fireRate && (
                          <div className="weapon-detail">
                            <span className="detail-icon">⚡</span>
                            <span className="detail-value">{weapon.fireRate} rpm</span>
                          </div>
                        )}
                        {weapon.magazineSize && (
                          <div className="weapon-detail">
                            <span className="detail-icon">📦</span>
                            <span className="detail-value">{weapon.magazineSize}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
