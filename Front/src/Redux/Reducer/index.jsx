const intialState = {
  user: [],
  weapons: [],
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
    default:
      return state;
  }
};

export default rootReducer;
