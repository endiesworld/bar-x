const INIT_STATE = {
  user: "LOADING",
  uid: "LOADING",
};

const userReducer = (state = INIT_STATE, action) => {
      switch (action.type) {
      case "USER":
      return {
        ...state,
       user: action.payload,
      };
      case "USERID":
      return {
        ...state,
       uid: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
