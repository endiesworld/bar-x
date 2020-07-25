const INIT_STATE = {
  deviceType: "",
};

const deviceTypeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "MOBILE_VIEW":
      return {
        ...state,
        deviceType: "mobile",
      };

    case "DESKTOP_VIEW":
      return {
        ...state,
        deviceType: "large",
      };

    default:
      return state;
  }
};

export default deviceTypeReducer;
