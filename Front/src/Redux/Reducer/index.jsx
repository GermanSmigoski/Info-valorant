const intialState = {
  weapons: [],
  agent: [],
  agents: [],
  agentsAux: [],
  maps: [],
  loading: {
    maps: false,
    weapons: false,
  },
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_WEAPONS": {
      return {
        ...state,
        weapons: action.payload,
        loading: {
          ...state.loading,
          weapons: false,
        },
      };
    }
    case "GET_WEAPONS_NAME": {
      return {
        ...state,
        weapons: action.payload,
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
        loading: {
          ...state.loading,
          maps: false,
        },
      };
    }
    case "LOADING_MAPS": {
      return {
        ...state,
        loading: {
          ...state.loading,
          maps: true,
        },
      };
    }
    case "LOADING_WEAPONS": {
      return {
        ...state,
        loading: {
          ...state.loading,
          weapons: true,
        },
      };
    }
    case "ROLE_FILTER": {
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
