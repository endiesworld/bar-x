const INIT_STATE = {
  addItemToLPO: "",
};

const addItemToLPOReducer = (state = INIT_STATE, action) => {
      switch (action.type) {
      case "ADDITEM":
      return {
        ...state,
       addItemToLPO: action.payload,
      };
    default:
      return state;
  }
};

export default addItemToLPOReducer;
