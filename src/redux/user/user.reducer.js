const INIT_STATE = {
  user: false,
};

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "USER":
      return {
        ...state,
       user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
