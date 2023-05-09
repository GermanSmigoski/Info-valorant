const intialState = {
  user: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
      };
    case "LOGIN_USER":
      return {
        ...state,
      };
    case "LOGOUT_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
