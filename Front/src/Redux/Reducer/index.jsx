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
    default:
      return state;
  }
};

export default rootReducer;
