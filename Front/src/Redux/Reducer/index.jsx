const intialState = {
  user: [],
  weapons: [],
  agent: [],
  agents: [],
  agentsAux: [],
  maps: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_WEAPONS": {
      return {
        ...state,
        weapons: action.payload,
      };
    }
    case "USER_REGISTER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "USER_LOGIN": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "GET_AGENT_NAME": {
      return {
        ...state,
        agent: action.payload,
      };
    }
    case "GET_ALL_AGENTS": {
      return {
        ...state,
        agents: action.payload,
        agentsAux: action.payload,
      };
    }
    case "GET_ALL_MAPS": {
      return {
        ...state,
        maps: action.payload,
      };
    }
    case "ROLE_FILTER": {
      let allAgents = state.agentsAux;
      let roleFiltered = allAgents.filter(rol => rol.name)
      return {
        ...state,
        agents: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
