import axios from "axios";

const API_BASE_URL = "https://valorant-api.com/v1";

// Weapons

export const getWeapons = () => async (dispatch, getState) => {
  // Verificar si ya hay armas en el store (caché)
  const state = getState();
  if (state.weapons && state.weapons.length > 0) {
    return; // Ya están cargadas, no hacer nada
  }

  try {
    dispatch({ type: "LOADING_WEAPONS" });
    let response = await axios.get(`${API_BASE_URL}/weapons`);
    const weapons = response.data.data.map((weapon) => {
      return {
        id: weapon.uuid,
        name: weapon.displayName,
        image: weapon.displayIcon,
        cost: weapon.shopData?.cost,
        category: weapon.shopData?.category,
        fireRate: weapon.weaponStats?.fireRate,
        magazineSize: weapon.weaponStats?.magazineSize,
        reloadTimeSeconds: weapon.weaponStats?.reloadTimeSeconds,
      };
    });
    dispatch({
      type: "GET_WEAPONS",
      payload: weapons,
    });
  } catch (e) {
    dispatch({
      type: "GET_WEAPONS_ERROR",
      payload: "Error al obtener las armas",
    });
  }
};

export const getWeaponsName = (name) => async (dispatch) => {
  try {
    let response = await axios.get(`${API_BASE_URL}/weapons`);
    const weapons = response.data.data.map((weapon) => {
      return {
        id: weapon.uuid,
        name: weapon.displayName,
        image: weapon.displayIcon,
        cost: weapon.shopData?.cost,
        category: weapon.shopData?.category,
      };
    });
    const weaponByName = weapons.find(
      (weapon) => weapon.name.toLowerCase() === name.toLowerCase()
    );
    dispatch({
      type: "GET_WEAPONS_NAME",
      payload: weaponByName,
    });
  } catch (e) {
    dispatch({
      type: "GET_WEAPONS_NAME_ERROR",
      payload: "Error al obtener las armas",
    });
  }
};

//Agents
export const getAgentByName = (name) => async (dispatch) => {
  try {
    let response = await axios.get(
      `${API_BASE_URL}/agents?language=es-MX&isPlayableCharacter=true`
    );
    const agents = response.data.data.map((a) => {
      return {
        uuid: a.uuid,
        name: a.displayName,
        description: a.description,
        agentImage: a.displayIcon,
        agentBanner: a.fullPortrait,
        background: a.backgroundGradientColors,
        role: {
          displayName: a.role?.displayName,
          description: a.role?.description,
          displayIcon: a.role?.displayIcon,
        },
        abilities: a.abilities.map((ability) => ({
          slot: ability.slot,
          displayName: ability.displayName,
          description: ability.description,
          displayIcon: ability.displayIcon,
        })),
      };
    });
    const agentFiltered = agents.find(
      (a) => a.name.toLowerCase() === name.toLowerCase()
    );
    dispatch({
      type: "GET_AGENT_NAME",
      payload: agentFiltered,
    });
  } catch (e) {
    dispatch({
      type: "GET_AGENT_NAME_ERROR",
      payload: "Error al buscar personaje",
    });
  }
};

export const getAllAgents = () => async (dispatch) => {
  try {
    let response = await axios.get(
      `${API_BASE_URL}/agents?language=es-MX&isPlayableCharacter=true`
    );
    const agents = response.data.data.map((agent) => {
      return {
        uuid: agent.uuid,
        name: agent.displayName,
        description: agent.description,
        agentImage: agent.displayIcon,
        agentBanner: agent.fullPortrait,
        background: agent.backgroundGradientColors,
        role: {
          displayName: agent.role?.displayName,
          description: agent.role?.description,
          displayIcon: agent.role?.displayIcon,
        },
        abilities: agent.abilities.map((ability) => ({
          slot: ability.slot,
          displayName: ability.displayName,
          description: ability.description,
          displayIcon: ability.displayIcon,
        })),
      };
    });
    dispatch({
      type: "GET_ALL_AGENTS",
      payload: agents,
    });
  } catch (e) {
    dispatch({
      type: "GET_AGENT_ERROR",
      payload: "Error al obtener los personajes",
    });
  }
};

export const roleFilter = (payload) => {
  try {
    return {
      type: "ROLE_FILTER",
      payload,
    };
  } catch (e) {
    return {
      type: "ROLE_FILTER_ERROR",
      payload: "Error al cargar el filtro por roles",
    };
  }
};

// Maps

export const getAllMaps = () => async (dispatch, getState) => {
  // Verificar si ya hay mapas en el store (caché)
  const state = getState();
  if (state.maps && state.maps.length > 0) {
    return; // Ya están cargados, no hacer nada
  }

  try {
    dispatch({ type: "LOADING_MAPS" });
    let response = await axios.get(`${API_BASE_URL}/maps`);
    const maps = response.data.data.map((map) => {
      return {
        id: map.uuid,
        name: map.displayName,
        image: map.splash,
        icon: map.displayIcon,
      };
    });
    dispatch({
      type: "GET_ALL_MAPS",
      payload: maps,
    });
  } catch (e) {
    dispatch({
      type: "GET_MAPS_ERROR",
      payload: "Error al obtener los mapas",
    });
    dispatch({
      type: "LOADING_MAPS",
      payload: false,
    });
  }
};
