const axios = require("axios");

function filtrarSkinsPorArma(skins, tipoArma) {
  return skins.filter((skin) => skin.displayName?.includes(tipoArma));
}

const getWeaponsApi = async () => {
  const response = await axios.get("https://valorant-api.com/v1/weapons");

  const weapons = response.data.data.map((weapon) => {
    return {
      id: weapon.uuid,
      displayName: weapon.displayName,
      cost: weapon.shopData?.cost,
      category: weapon.shopData?.category,
    };
  });

  return weapons;
};

module.exports = {
  getAllWeapons: async (req, res) => {
    try {
      const weapons = await getWeaponsApi();
      res.status(200).send(weapons);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  getWeaponById: async (req, res) => {
    const name = req.params.name;
    try {
      const weapons = await getWeaponsApi();
      if (!name) return res.status(404).send("Weapon not found");

      const weaponByName = weapons.find(
        (weapon) => weapon.displayName.toLowerCase() == name.toLowerCase()
      );
      res.status(200).send(weaponByName);
    } catch (e) {
      res.status(400).send(e);
    }
  },
  getWeaponSkins: async (req, res) => {
    const typeWeapons = req.params.type;
    const skinsCall = await axios.get(`${API_URL}/weapons/skins`);
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
