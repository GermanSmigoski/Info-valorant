const axios = require("axios");

function filtrarSkinsPorArma(skins, tipoArma) {
  return skins.filter((skin) => skin.displayName?.includes(tipoArma));
}

const getWeaponsApi = async () => {
  const weapons = [];
  const apiCall = await axios.get("https://valorant-api.com/v1/weapons");

  apiCall.data.map((weapon) => {
    weapons.push({
      uuid: weapon.uuid,
      displayName: weapon.displayName,
      cost: weapon.shopData.map((w) => w.cost),
      category: weapon.shopData.map((c) => c.category),
    });
  });
  return agents;
};
module.exports = {
  getAllWeapons: async (req, res) => {
    try {
      const weapons = await getWeaponsApi();
      if (!weapons) return res.status(404).send("Weapons not found");
      res.status(200).send(weapons);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  getWeaponById: async (req, res) => {
    const id = req.params.id;
    try {
      const weapons = await getWeaponsApi();
      if (!id) return res.status(404).send("Weapon not found");
      if (id) {
        let weaponById = await weapons.filter((weapon) => weapon.id == id);
        res.status(200).send(weaponById);
      }
    } catch (e) {
      res.status(400).send(e);
    }
  },
  getWeaponSkins: async (req, res) => {
    const typeWeapons = req.params.type;
    const skinsCall = await axios.get(
      "https://valorant-api.com/v1/weapons/skins"
    );
    const skins = skinsCall.data;
    const filteredSkins = filtrarSkinsPorArma(skins, typeWeapons);
    try {
      if (!filteredSkins) return res.status(400).send("Skins not found");
      res.status(200).send(filteredSkins);
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
